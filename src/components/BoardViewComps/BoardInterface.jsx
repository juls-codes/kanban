import TaskStatus from './TaskStatus';
import AddTaskModal from './AddTaskModal';
import { useState } from 'react';
import useApp from '../../utils/useApp';
import { toast } from 'react-toastify';

/* We map over the keys in this 'statuses' object to retrieve an array of keys.
 For each 'status' (representing task status), a 'BoardTab' component is created with its key set to the current 'status' and 'statusName' set to the value associated with the current 'status' key.
*/
const statuses = {
  toDo: 'To Do',
  inProgress: 'In Progress',
  completed: 'Completed'
};

const BoardInterface = ({boardData, boardId, updateLastUpdated}) => {
  const [addTaskto, setAddTaskTo] = useState('');
  const [tabs, setTabs] = useState(structuredClone(boardData));
  const { updateBoard } = useApp();

  const handleAddTask = async(text) => {
    const clone = structuredClone(tabs);
    clone[addTaskto].unshift({ id: crypto.randomUUID(), text})

    if(!text.trim()) {
      toast('Oops! Tasks cannot be empty.');
      return
    }
    try {
      console.log(boardId, clone)
      await updateBoard(boardId, clone);
      setTabs(clone);
      setAddTaskTo();
      updateLastUpdated();
    } catch(err){
      console.log(err);
    }
  }

  return (
    <>
      {!!addTaskto &&
        <AddTaskModal
          statusName={statuses[addTaskto]}
          onClose={() => setAddTaskTo('')}
          addTask={handleAddTask}
        />
      }

      <div className='sm:grid grid-cols-3 gap-4 lg:gap-6'>
        { Object.keys(statuses).map(status => 
          <TaskStatus
          key={status}
          tabs={tabs[status]}
          statusName={statuses[status]}
          addTask={() => setAddTaskTo(status)}
          />
        )}
      </div>
    </>
  )
}

export default BoardInterface