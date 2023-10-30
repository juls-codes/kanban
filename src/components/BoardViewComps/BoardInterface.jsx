import TaskStatus from './TaskStatus';
import AddTaskModal from './AddTaskModal';
import { useState } from 'react';

/* We map over the keys in this 'statuses' object to retrieve an array of keys.
 For each 'status' (representing task status), a 'BoardTab' component is created with its key set to the current 'status' and 'statusName' set to the value associated with the current 'status' key.
*/
const statuses = {
  toDo: 'To Do',
  inProgress: 'In Progress',
  completed: 'Completed'
};

const BoardInterface = ({boardData}) => {
  const [addTaskto, setAddTaskTo] = useState('');
  const [tasks, setTasks] = useState(boardData);

  return (
    <>
      {!!addTaskto &&
        <AddTaskModal
          statusName={statuses[addTaskto]}
          onClose={() => setAddTaskTo('')}
        />
      }

      <div className='sm:grid grid-cols-3 gap-4 lg:gap-6'>
        { Object.keys(statuses).map(status => 
          <TaskStatus
          key={status}
          tasks={tasks[status]}
          statusName={statuses[status]}
          addTask={() => setAddTaskTo(status)}
          />
        )}
      </div>
    </>
  )
}

export default BoardInterface