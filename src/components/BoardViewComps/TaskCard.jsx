import { TbX } from 'react-icons/tb';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({index, id, text, deleteTask}) => {
  return (
    <Draggable draggableId={id} index={index}>
    {(provided) => 
      <li
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        ref={provided.innerRef}
        className='bg-light rounded flex justify-between items-center gap-4 p-2 pl-3 pr-1 mb-2'
        >
        <p className='line-clamp-5 break-words'>{text}</p>
        <button
          onClick={deleteTask}
          className='p-2 rounded h-fit hover:bg-dark focus:bg-dark focus:outline-accent'>
          <TbX />
          <span className='sr-only'>Delete Task</span>
        </button>
      </li>
    
    }
    </Draggable>
  )
}

export default TaskCard