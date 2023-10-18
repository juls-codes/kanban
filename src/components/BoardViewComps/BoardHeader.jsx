import { TbArrowNarrowLeft, TbTrash } from 'react-icons/tb';

const BoardHeader = () => {

  return (
    <header className='bg-light p-4 pt-8 border-b-2 rounded flex justify-between items-center'>
      <button className='p-1 rounded text-2xl w-fit flex items-center gap-2 hover:bg-dark focus:bg-dark outline-accent'>
        <TbArrowNarrowLeft />
        <span className='text-base'>All Boards</span>
      </button>
      
      <button
        className='p-1 rounded h-fit text-2xl hover:bg-dark focus:bg-dark outline-accent'>
        <TbTrash />
        <span className='sr-only'>Delete</span>
      </button>

    </header>
  )
}

export default BoardHeader