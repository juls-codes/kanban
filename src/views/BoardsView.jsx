import BoardsHeader from '../components/BoardsHeader';
import NewBoardModal from '../components/NewBoardModal';
import { useState } from 'react';
import BoardCard from '../components/BoardCard';

const BoardsView = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className='w-screen min-h-screen flex flex-col'>
      <BoardsHeader openModal={() => setShowModal(true)}/>
      { showModal && <NewBoardModal closeModal={() => setShowModal(false)}/> }
      <h1 className='text-2xl m-4 text-gray-400'>All Boards</h1>
      <section className='m-4'>
        <div>
          <BoardCard />
        </div>
      </section>
    </main>
    
  )
}

export default BoardsView