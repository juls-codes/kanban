import { MdOutlineClose } from 'react-icons/md'
import { useEffect, useRef, useState } from 'react';

const AddTaskModal = ({ statusName, onClose, addTask }) => {
  const [text, setText] = useState('');
  const modal = useRef(null);

  // Provide user other ways of closing modal: when click occurs outside ref OR when 'esc' key is pressed
  useEffect(() => {
    const handleCloseRef = (e) => {
      if (modal.current && !modal.current.contains(e.target)){
        onClose();
      }
    };

    const handleCloseEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('click', handleCloseRef, true);
    document.addEventListener('touchstart', handleCloseRef, true);
    document.addEventListener('keydown', handleCloseEsc, true);
    
    return() => {
      document.removeEventListener('click', handleCloseRef, true);
      document.removeEventListener('touchstart', handleCloseRef, true);
      document.removeEventListener('keydown', handleCloseEsc, true);
    };

  }, [onClose]);

  // Focus trap inside modal
  useEffect(() => {
    if (addTask) {
      const thisModal = modal.current;
      const focusableElems = thisModal.querySelectorAll('input, button')
      const firstElem = focusableElems[0];
      const lastElem = focusableElems[focusableElems.length - 1];

      firstElem.focus();
      
      const handleTabKeyPress = (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElem) {
            event.preventDefault();
            lastElem.focus();
          } else if (!event.shiftKey && document.activeElement === lastElem) {
            event.preventDefault();
            firstElem.focus();
          }
        }
      };
      thisModal.addEventListener("keydown", handleTabKeyPress);

      return () => {
        thisModal.removeEventListener("keydown", handleTabKeyPress);
      };
    };
  }, [addTask])

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-dark/90 flex justify-center items-center'>
      <div
        ref={modal}
        role='dialog'
        aria-labelledby='dialog-title'
        className='bg-light font-mono rounded shadow-md max-w-[400px] w-full h-fit p-4 mx-6 relative'>
        <h3 id='dialog-title' className='text-xl mb-4'>Add Task</h3>

        <label className='flex flex-col gap-2 my-4'>
          Task:
          <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          className='font-sans bg-transparent border border-gray-600 rounded w-full p-2 focus:outline-accent'
          placeholder="What's your task?"
        />
        </label>

        <p className='my-4'>Status: {statusName}</p>

        <button
          onClick={() => addTask(text)}
          className='bg-accent rounded w-full p-2 mb-2 hover:bg-opacity-80 focus:bg-dark outline-accent'>
            Add
        </button>

        <button
          onClick={onClose}
          aria-label='Close Add Task panel'
          className='text-lg rounded p-2 absolute top-3 right-2 hover:bg-dark focus:bg-dark outline-accent'>
          <MdOutlineClose />
        </button>
      </div>
    </div>
  )
}

export default AddTaskModal