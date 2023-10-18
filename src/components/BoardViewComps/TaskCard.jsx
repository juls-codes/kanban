import { TbX } from 'react-icons/tb';

const TaskCard = () => {
  return (
    <li className='bg-light rounded flex justify-between gap-4 p-2'>
      <p className='m-2'>Task Content</p>
      <button className='p-2 h-fit'><TbX /></button>
    </li>
  )
}

export default TaskCard