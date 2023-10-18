import { useEffect, useState, useRef } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import useApp from '../../utils/useApp';
import colourChoices from '../../utils/colourChoices';
import { toast } from 'react-toastify';

const NewBoardModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [boardColour, setBoardColour] = useState(0);
  const [loading, setLoading] = useState(false);
  const modal = useRef();

  const { createBoard } = useApp();
  const handleCreate = async() => {
    try {
      setLoading(true);
      await createBoard({ name, boardColour });
      closeModal();
      toast(`'${name}' board created`);
    } catch(err){
      setLoading(false);
      console.log(err);
    }
  }

  // Close Create Board modal when click occurs outside ref
  useEffect(() => {
    const handleClose = (e) => {
      if (modal.current && !modal.current.contains(e.target)){
        closeModal();
      }
    };
    document.addEventListener('click', handleClose, true);
    document.addEventListener('touchstart', handleClose, true);
    return() => {
      document.removeEventListener('click', handleClose, true);
      document.removeEventListener('touchstart', handleClose, true);
    };
  }, [closeModal]);

  return (
    <div className='absolute w-full h-full bg-dark/90 flex justify-center items-center'>
    <div ref={modal} className='bg-light font-mono rounded shadow-md max-w-[400px] w-full h-fit p-4 relative mx-6'>
      <h3 className='text-xl'>Create Board</h3>
      <button
        onClick={closeModal}
        aria-label='Close Create Board modal'
        className='text-lg rounded p-2 absolute top-3 right-2 hover:bg-dark focus:bg-dark outline-accent'>
          <MdOutlineClose />
      </button>

      <label className='flex flex-col gap-2 my-4'>
        Board Name:
        <input
          type='text'
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Board Name'
          className='font-sans bg-transparent border border-gray-600 rounded p-2 focus:outline-accent'
        />
      </label>

      <fieldset className='flex items-center my-4 space-y-2'>
        <legend className='xs:float-left mr-2'>Colour:</legend>
        <div className='flex flex-wrap gap-3 w-fit mx-auto xs:mx-0'>
          {colourChoices.map((colour, idx) => (
            <label key={idx}>
              <input
                type='radio'
                name='colour-selection'
                onClick={() => setBoardColour(idx)}
                className='cursor-pointer appearance-none rounded-full w-6 h-6'
                style={{
                  backgroundColor: colour.hex,
                  border: boardColour === idx ? '3px solid #2C2C38' : 'none',
                  outline: boardColour === idx ? `2px solid ${colour.hex}` : 'none'
                }}
              />
              <span className='sr-only'>{colour.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button onClick={handleCreate} disabled={loading} className='bg-accent rounded w-full p-2 mb-2 hover:bg-dark focus:bg-dark outline-accent'>Create</button>

    </div>
    </div>
  )
}

export default NewBoardModal