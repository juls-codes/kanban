import { useEffect, useRef, useState } from 'react';
import { BsPatchExclamation } from 'react-icons/bs';

const DeleteBoardModal = ({handleDeleteBoard, setShowDeleteModal}) => {
  const [confirmed, setConfirmed] = useState(false);
  const modal = useRef(null);

  const onCancel = () => {
    setShowDeleteModal(false);
  }

  const onDelete = () => {
    setConfirmed(true);
  }

  useEffect(() => {
    if (confirmed) {
      handleDeleteBoard();
    }
  }, [confirmed, handleDeleteBoard]);

  // Provide user other ways of closing modal: when click occurs outside ref OR when 'esc' key is pressed
  useEffect(() => {
    const handleCloseRef = (e) => {
      if (modal.current && !modal.current.contains(e.target)){
        setShowDeleteModal(false);
      }
    };

    const handleCloseEsc = (e) => {
      if (e.key === 'Escape') {
        setShowDeleteModal(false);
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

  }, [setShowDeleteModal]);

  // Focus trap inside modal
  useEffect(() => {
    const thisModal = modal.current;
    const focusableElems = thisModal.querySelectorAll('button')
    const firstElement = focusableElems[0];
    const lastElement = focusableElems[focusableElems.length - 1];

    lastElement.focus();
    
    const handleTabKeyPress = (event) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    thisModal.addEventListener("keydown", handleTabKeyPress);

    return () => {
      thisModal.removeEventListener("keydown", handleTabKeyPress);
    };
  }, [])

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-dark/90 flex justify-center items-center'>
      <div
        ref={modal}
        role='dialog'
        aria-labelledby='dialog-title'
        className='bg-light font-mono text-center rounded shadow-md max-w-[400px] w-full h-fit p-4 mx-6 space-y-4 relative'>
        <BsPatchExclamation className='text-3xl mx-auto'/>
        <h2 id='dialog-title' className='sr-only'>Delete board</h2>
        <p className='font-mono text-xl'>Are you sure you want to delete this board?</p>
        <button onClick={onDelete} className='border border-gray-400 rounded py-2 px-4 mx-2 hover:bg-dark focus:outline-accent focus:bg-dark'>Delete Board</button>
        <button onClick={onCancel} className='border border-gray-400 rounded py-2 px-4 mx-2 hover:bg-dark focus:outline-accent focus:bg-dark'>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteBoardModal