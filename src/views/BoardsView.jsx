import BoardsHeader from '../components/BoardsHeader';
import NewBoardModal from '../components/NewBoardModal';
import { useState } from 'react';
import BoardCard from '../components/BoardCard';

const BoardsView = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BoardsHeader openModal={() => setShowModal(true)}/>
      { showModal && <NewBoardModal closeModal={() => setShowModal(false)}/> }
      
      <main className='m-6 grow'>
        <section className='max-w-xl mx-auto sm:grid grid-cols-2 lg:grid-cols-3 gap-4'>
          <h1 className='text-2xl text-gray-400 col-span-full'>All Boards</h1>
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </section>
      </main>

    </>
  )
}

export default BoardsView