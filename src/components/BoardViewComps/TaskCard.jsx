import { TbX } from 'react-icons/tb';

const TaskCard = ({id, text, deleteTask}) => {
  return (
    <li className='bg-light rounded flex justify-between items-center gap-4 p-2 pr-1'>
      <p className='m-1'>{text}</p>
      <button
        onClick={deleteTask}
        className='p-2 rounded h-fit hover:bg-dark focus:bg-dark focus:outline-accent'>
        <TbX />
      </button>
    </li>
  )
}

export default TaskCard