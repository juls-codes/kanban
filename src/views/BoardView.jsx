import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import useStore from '../store';
import useApp from '../utils/useApp';

import AppLoader from '../components/AppLoader';
import BoardHeader from '../components/BoardViewComps/BoardHeader';
import BoardInterface from '../components/BoardViewComps/BoardInterface';

const BoardView = () => {
  // To access data of the board from the document stored in the 'boards' collection, we'll use the board ID from the params
  const { boards, areBoardsFetched } = useStore();
  const { boardId } = useParams();
  const board = useMemo(() => boards.find( b => b.id === boardId), []);

  const navigate = useNavigate();
  const { fetchBoard } = useApp();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  console.log(data, lastUpdated, loading);
  
  const handleFetchBoard = async() => {
    try {
      const boardData = await fetchBoard(boardId);
      if (boardData) {
        const { lastUpdated, tabs } = boardData;
        setData(boardData);
        setLastUpdated(lastUpdated.toDate().toLocaleString('en-US'));
      };
      setLoading(false);
    } catch(err) {
      console.log(err);
    }
  };

  // If the user's Boards are not fetched, or if the particular Board does not exist within the database, push the user to the BoardsView. Otherwise, fetch the board data using handleFetchBoard().
  useEffect(() => {
    if(!areBoardsFetched || !board){
      navigate('/boards');
    } else {
      handleFetchBoard();
    }
  }, []);

  if(!board) return null;
  if (loading) return <AppLoader />

  return (
    <>
      <BoardHeader boardColour={board.boardColour}/>
      <main className='m-6'>
        <h1 className='text-2xl'>{board.name}</h1>
        <p className='text-gray-400 text-sm'>Last updated: {lastUpdated}</p>
        <BoardInterface />
      </main>
    </>
  )
}

export default BoardView