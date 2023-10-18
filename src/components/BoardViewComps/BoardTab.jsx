import TaskCard from './TaskCard';

const BoardTab = () => {
  return (
    <section className='m-4'>
      <div className='flex justify-between items-center'>
        <h2 className='uppercase text-gray-400 m-2'>Status</h2>
      </div>

      <ul className='space-y-2 m-2'>
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ul>
  </section>
  )
}

export default BoardTab