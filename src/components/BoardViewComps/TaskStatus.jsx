import { TbPlus } from 'react-icons/tb';
import TaskCard from './TaskCard';

const TaskStatus = ({ statusName, addTask, tabs }) => {

  return (
    <section className='my-4 h-fit grid grid-cols-frAuto items-center gap-2 '>
      <h2 className='uppercase text-gray-400'>{statusName}</h2>
      <button
        onClick={addTask}
        className='p-2 text-2xl rounded h-fit hover:bg-light focus:bg-light outline-accent'><TbPlus />
      </button>

      <ul className='space-y-2 col-span-2'>
        {tabs.map((tab) => (
          <TaskCard
            key={tab.id}
            id={tab.id}
            text={tab.text} />
        ))}
      </ul>
  </section>
  )
}

export default TaskStatus