import TaskStatus from './TaskStatus';
import AppLoader from '../AppLoader';
import AddTaskModal from './AddTaskModal';
import { useCallback, useState } from 'react';
import useApp from '../../utils/useApp';
import { toast } from 'react-toastify';
import { DragDropContext } from 'react-beautiful-dnd';

/* We map over the keys in this 'statuses' object to retrieve an array of keys.
 For each 'status' (representing task status), a 'BoardTab' component is created with its key set to the current 'status' and 'statusName' set to the value associated with the current 'status' key.
*/
const statuses = {
  toDo: 'To Do',
  inProgress: 'In Progress',
  completed: 'Completed'
};

const BoardInterface = ({boardData, boardId, boardColour, updateLastUpdated}) => {
  const [addTaskto, setAddTaskTo] = useState('');
  const [tabs, setTabs] = useState(structuredClone(boardData));
  const { updateBoard } = useApp();
  const [loading, setLoading] = useState(false);

  const handleUpdateBoard = async (clone) => {
    setLoading(true);
    await updateBoard(boardId, clone);
    setTabs(clone);
    updateLastUpdated();
    toast('Board updated')
  }

  const handleAddTask = async(text) => {
    if(!text.trim()) return toast('Oops! Tasks cannot be empty.');

    const clone = structuredClone(tabs);
    clone[addTaskto].unshift({ id: crypto.randomUUID(), text})

    try {
      await handleUpdateBoard(clone);
      setAddTaskTo('');
    } catch(err){
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
 
  const handleDeleteTask = useCallback(async(tab, taskId) => {
    const clone = structuredClone(tabs);
    const taskIdx = clone[tab].findIndex((t) => t.id === taskId);
    clone[tab].splice(taskIdx, 1);
    try {
      await handleUpdateBoard(clone);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [tabs]);

  const handleDragDrop = async({source, destination}) => {
    // Return if task card is dropped in non-droppable area
    // Return if droppableId and index of destination is the same as source
    if (!destination)
      return;
    if ((source.droppableId === destination.droppableId) && (source.index === destination.index))
      return;

    const clone = structuredClone(tabs);
    // Remove task from source array 
    const [task] = clone[source.droppableId].splice(source.index, 1);
    // Inject task to destination array
    clone[destination.droppableId].splice(destination.index, 0, task);

    try {
      await handleUpdateBoard(clone);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if(loading) return <AppLoader />

  return (
    <>
      {!!addTaskto &&
        <AddTaskModal
          statusName={statuses[addTaskto]}
          onClose={() => setAddTaskTo('')}
          addTask={handleAddTask}
        />
      }

      <DragDropContext onDragEnd={handleDragDrop}>
      <div className='sm:grid grid-cols-3 gap-4 lg:gap-6 grow'>
        { Object.keys(statuses).map(status => 
          <TaskStatus
          key={status}
          status={status}
          tasks={tabs[status]}
          statusName={statuses[status]}
          addTask={() => setAddTaskTo(status)}
          deleteTask={handleDeleteTask}
          boardColour={boardColour}
          />
        )}
      </div>
    </DragDropContext>
    </>
  )
}

export default BoardInterface