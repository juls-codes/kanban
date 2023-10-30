import { TbPlus } from 'react-icons/tb';
import TaskCard from './TaskCard';

const BoardTab = ({ statusName, addTask }) => {
  return (
    <section className='my-4 grid grid-cols-frAuto items-center gap-2'>
      <h2 className='uppercase text-gray-400'>{statusName}</h2>
      <button
        onClick={addTask}
        className='p-2 text-2xl rounded h-fit hover:bg-light focus:bg-light outline-accent'><TbPlus />
      </button>

      <ul className='space-y-2 col-span-2'>
        <TaskCard />
      </ul>
  </section>
  )
}

export default BoardTab