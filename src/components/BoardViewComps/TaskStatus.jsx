import { TbPlus } from 'react-icons/tb';
import TaskCard from './TaskCard';
import Droppable from '../../utils/StrictModeDroppable';
import colourChoices from '../../utils/colourChoices';

const TaskStatus = ({ statusName, addTask, tasks, status, deleteTask, boardColour }) => {

  return (
    <Droppable droppableId={status}>
      {(provided) => 
      <section className='my-4 grid grid-cols-frAuto h-fit items-center'>
        <h2 className='uppercase text-gray-400'>{statusName}</h2>
        <button
          onClick={addTask}
          className='p-2 text-2xl rounded h-max hover:bg-light focus:bg-light outline-accent'>
            <TbPlus />
            <p className='sr-only'>Add Task</p>
        </button>

        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          className='col-span-2 border-b mt-2'
          style={{borderColor: colourChoices[boardColour].hex}}
          >
          {tasks.map((task, idx) => (
            <TaskCard
              key={task.id}
              id={task.id}
              index={idx}
              text={task.text}
              deleteTask={() => deleteTask(status, task.id)}
            />
          ))}
          {provided.placeholder}
        </ul>
      </section>
      }
    </Droppable>
  )
}

export default TaskStatus