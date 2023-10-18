import BoardHeader from '../components/BoardViewComps/BoardHeader';
import BoardInterface from '../components/BoardViewComps/BoardInterface';

const BoardView = () => {
  return (
    <>
      <BoardHeader />
      <main className='my-6'>
        <h1 className='text-2xl mx-6'>Board Name</h1>
        <p className='text-gray-400 text-sm mx-6'>Last updated:</p>
        <BoardInterface />
      </main>
    </>
  )
}

export default BoardView