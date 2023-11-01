import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useStore from '../store';
import useApp from '../utils/useApp';

import AppLoader from '../components/AppLoader';
import NotReadyNotice from '../components/BoardViewComps/NotReadyNotice';
import BoardHeader from '../components/BoardViewComps/BoardHeader';
import BoardInterface from '../components/BoardViewComps/BoardInterface';

const BoardView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);

  // To access data of the board from the document stored in the 'boards' collection, we'll use the board ID from the params
  const { boards, areBoardsFetched } = useStore();
  const { boardId } = useParams();
  const { fetchBoard } = useApp();
  
  const board = useMemo(() => boards.find( b => b.id === boardId), []);
  const boardData = useMemo(() => data, [data]);
  

  const handleFetchBoard = async() => {
    try {
      const boardData = await fetchBoard(boardId);
      if (boardData) {
        const { lastUpdated, tabs } = boardData;
        setData(tabs);
        setLastUpdated(lastUpdated.toDate().toLocaleString('en-US'));
      };
      setLoading(false);
    } catch(err) {
      console.log(err);
    }
  };

  // useCallback hook is used to memoize our fnction to ensure it doesn't change on every render unless its dependencies change
  const handleUpdateLastUpdated = useCallback(() => 
    setLastUpdated(new Date().toLocaleString('en-US')), []);

  // If the user's Boards are not fetched, or if the particular Board does not exist within the database, push the user to the BoardsView. Otherwise, fetch the board data using handleFetchBoard().
  useEffect(() => {
    if(!areBoardsFetched || !board){
      navigate('/boards');
    } else {
      handleFetchBoard();
    }
  }, []);

  if (!board) return null;
  if (loading) return <AppLoader />;
  if (!data) return <NotReadyNotice />;

  return (
    <>
      <BoardHeader boardColour={board.boardColour}/>
      <main className='m-6 h-full flex flex-col'>
        <h1 className='text-2xl'>{board.name}</h1>
        <p className='text-gray-400 text-sm'>Last updated: {lastUpdated}</p>
        <BoardInterface boardData={boardData} boardId={boardId} boardColour={board.boardColour} updateLastUpdated={handleUpdateLastUpdated} />
      </main>
    </>
  )
}

export default BoardView