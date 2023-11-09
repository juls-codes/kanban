import AppLoader from '../components/AppLoader';
import BoardsHeader from '../components/BoardsViewComps/BoardsHeader';
import NewBoardModal from '../components/BoardsViewComps/NewBoardModal';
import { useEffect, useState } from 'react';
import BoardCard from '../components/BoardsViewComps/BoardCard';
import useApp from '../utils/useApp';
import useStore from '../store';
import NoBoardsNotice from '../components/BoardsViewComps/NoBoardsNotice';

const BoardsView = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { fetchBoards } = useApp();
  const { boards, areBoardsFetched } = useStore();
  
  useEffect(() => {
    if (!areBoardsFetched) {
      fetchBoards(setLoading);
    } else {
      setLoading(false);
    }
  },[]);

  if (loading) return <AppLoader />

  return (
    <>
      <BoardsHeader openModal={() => setShowModal(true)}/>
      { showModal && <NewBoardModal showModal={showModal} closeModal={() => setShowModal(false)}/> }
      
      <main className='m-6 grow'>
        {!boards.length ?
          <NoBoardsNotice /> : 
          <section className='max-w-xl mx-auto sm:grid grid-cols-2 lg:grid-cols-3 gap-4'>
          <h1 className='text-2xl text-gray-400 col-span-full'>All Boards</h1>
          {boards.map(board =>
            <BoardCard key={board.id} {...board}/>
          )}
        </section>
        }
      </main>
    </>
  )
}

export default BoardsView