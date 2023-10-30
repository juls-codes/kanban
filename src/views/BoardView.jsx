import useStore from '../store';
import BoardHeader from '../components/BoardViewComps/BoardHeader';
import BoardInterface from '../components/BoardViewComps/BoardInterface';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

const BoardView = () => {
  // To access data of the board from the document stored in the 'boards' collection, we'll use the board ID from the params
  const { boardId } = useParams();
  const { boards } = useStore();
  const board = useMemo(() => boards.find( b => b.id === boardId), []);

  return (
    <>
      <BoardHeader boardColour={board.boardColour}/>
      <main className='m-6'>
        <h1 className='text-2xl'>{board.name}</h1>
        <p className='text-gray-400 text-sm'>Last updated:</p>
        <BoardInterface />
      </main>
    </>
  )
}

export default BoardView