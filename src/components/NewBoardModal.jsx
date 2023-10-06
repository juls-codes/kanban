import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const NewBoardModal = () => {
  const [name, setName] = useState('');
  const [colour, setColour] = useState(0);

  const colourChoices = [
    '#fb7185', // Red
    '#fb923c', // Orange
    '#facc15', // Yellow
    '#a3e635', // Lime
    '#22d3ee', // Cyan
    '#60a5fa', // Blue
  ];


  return (
    <div className='bg-light font-mono rounded shadow-md p-4 m-8'>
      <div className='flex justify-between items-center'>
        <h3 className='text-xl'>Create Board</h3>
        <button aria-label='Close pop-up' className='text-lg rounded p-2 hover:bg-dark'><MdOutlineClose /></button>
      </div>

      <div className='flex flex-col gap-2 my-4'>
        <label htmlFor="name">Board Name:</label>
        <input
          type="text"
          id='name'
          name='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='Board Name'
          className='font-sans bg-transparent border border-gray-600 rounded p-2 focus:outline-accent'/>
      </div>

      <div className='flex gap-4 my-4'>
          <label htmlFor="colour-selection">Colour:</label>
      </div>
      
      <button className='bg-accent rounded w-full p-2'>Create</button>

    </div>
  )
}

export default NewBoardModal