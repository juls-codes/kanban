import BoardsHeader from '../components/BoardsHeader';
import NewBoardModal from '../components/NewBoardModal';
import { useState } from 'react';

const BoardsView = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <BoardsHeader openModal={() => setShowModal(true)}/>
      <p>BoardsView</p>
      { showModal && <NewBoardModal closeModal={() => setShowModal(false)}/> }
    </main>
    
  )
}

export default BoardsView