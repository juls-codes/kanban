import { MdOutlineClose } from 'react-icons/md'
import { useEffect, useRef } from 'react';

const AddTaskModal = ({ statusName, onClose }) => {
  console.log(statusName);
  const modal = useRef();

   // Close Create Board modal when click occurs outside ref
   useEffect(() => {
    const handleClose = (e) => {
      if (modal.current && !modal.current.contains(e.target)){
        onClose();
      }
    };
    document.addEventListener('click', handleClose, true);
    document.addEventListener('touchstart', handleClose, true);
    return() => {
      document.removeEventListener('click', handleClose, true);
      document.removeEventListener('touchstart', handleClose, true);
    };
  }, []);

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-dark/90 flex justify-center items-center'>
      <div ref={modal} className='bg-light font-mono rounded shadow-md max-w-[400px] w-full h-fit p-4 mx-6 relative'>
      
      <h3 className='text-xl mb-4'>Add Task</h3>
      <button
        onClick={onClose}
        aria-label='Close Add Task panel'
        className='text-lg rounded p-2 absolute top-3 right-2 hover:bg-dark focus:bg-dark outline-accent'>
        <MdOutlineClose />
      </button>

      <input
        type="text"
        className='font-sans bg-transparent border border-gray-600 rounded w-full p-2 focus:outline-accent'
        placeholder="What's your task?"
      />

      <p className='my-4'>Status: {statusName}</p>

      <button className='bg-accent rounded w-full p-2 mb-2 hover:bg-dark focus:bg-dark outline-accent'>Add</button>
      </div>
    </div>
  )
}

export default AddTaskModal