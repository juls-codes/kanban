import { useEffect, useState, useRef } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import useApp from '../utils/useApp';

const NewBoardModal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [boardColour, setBoardColour] = useState(0);
  const [loading, setLoading] = useState(false);
  const modal = useRef();

  const colourChoices = [
    {hex: '#fb7185', label: 'Red'},
    {hex: '#fb923c', label: 'Orange'},
    {hex: '#facc15', label: 'Yellow'},
    {hex: '#a3e635', label: 'Lime'},
    {hex: '#22d3ee', label: 'Cyan'},
    {hex: '#60a5fa', label: 'Blue'}
  ];

  const { createBoard } = useApp();
  const handleCreate = async() => {
    try {
      setLoading(true);
      await createBoard({ name, boardColour });
      closeModal();
    } catch(err){
      setLoading(false);
      console.log(err);
    }
  }

  // Close Create Board panel when click occurs outside ref
  useEffect(() => {
    const handleClose = (e) => {
      if (modal.current && !modal.current.contains(e.target)){
        closeModal();
        console.log('Clicked outside modal')
      }
    };
    document.addEventListener("click", handleClose, true);
    document.addEventListener("touchstart", handleClose, true);
    return() => {
      document.removeEventListener("click", handleClose, true);
      document.removeEventListener("touchstart", handleClose, true);
    };
  }, [closeModal]);

  console.log(name, boardColour);

  return (
    <div ref={modal} className='bg-light font-mono rounded shadow-md p-4 m-8'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl'>Create Board</h3>
        <button
          onClick={closeModal}
          aria-label='Close Create Board panel'
          className='text-lg rounded p-2 hover:bg-dark'><MdOutlineClose /></button>
      </div>

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

      <fieldset className='my-4 flex flex-col gap-2 xs:flex-row xs:gap-4'>
        <legend className='colour-selection'>Colour:</legend>
        <div className='flex justify-evenly gap-3 flex-wrap'>
          {colourChoices.map((colour, idx) => (
            <label key={idx}>
              <input
                type='radio'
                name='colour-selection'
                onClick={() => setBoardColour(idx)}
                className='cursor-pointer appearance-none w-6 h-6 rounded-full'
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

      <button onClick={handleCreate} disabled={loading} className='bg-accent rounded w-full p-2 mb-2'>Create</button>

    </div>
  )
}

export default NewBoardModal