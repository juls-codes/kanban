import { TbArrowNarrowLeft, TbTrash } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import colourChoices from '../../utils/colourChoices';

const BoardHeader = ({ boardColour, setShowDeleteModal}) => {
  const navigate = useNavigate();
  const colourIdx = boardColour;
  
  return (
    <header
      style={{ borderColor: colourChoices[colourIdx].hex }} 
      className='bg-light p-4 border-b-2 rounded flex justify-between items-center'
      >
      <button
        onClick={() => navigate('/boards')}
        className='px-1 rounded text-2xl w-fit flex items-center gap-1 hover:bg-dark focus:bg-dark outline-accent'>
        <TbArrowNarrowLeft />
        <span className='text-base p-1'>All Boards</span>
      </button>
      
      <button
        onClick={setShowDeleteModal}
        className='p-1.5 rounded h-fit text-2xl mr-2 hover:bg-dark focus:bg-dark outline-accent'>
        <TbTrash />
        <span className='sr-only'>Delete Board</span>
      </button>
    </header>
  )
}

export default BoardHeader