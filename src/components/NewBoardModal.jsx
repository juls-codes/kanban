import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const NewBoardModal = () => {
  const [name, setName] = useState('');
  const [boardColour, setBoardColour] = useState(0);

  const colourChoices = [
    {hex: '#fb7185', label: 'Red'},
    {hex: '#fb923c', label: 'Orange'},
    {hex: '#facc15', label: 'Yellow'},
    {hex: '#a3e635', label: 'Lime'},
    {hex: '#22d3ee', label: 'Cyan'},
    {hex: '#60a5fa', label: 'Blue'}
  ];

  console.log(name, boardColour);


  return (
    <div className='bg-light font-mono rounded shadow-md p-4 m-8'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl'>Create Board</h3>
        <button aria-label='Close pop-up' className='text-lg rounded p-2 hover:bg-dark'><MdOutlineClose /></button>
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

      <div className='my-4 flex flex-col gap-2 xs:flex-row xs:gap-4'>
        <label htmlFor='colour-selection'>Colour:</label>
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
      </div>

      <button className='bg-accent rounded w-full p-2 mb-2'>Create</button>

    </div>
  )
}

export default NewBoardModal