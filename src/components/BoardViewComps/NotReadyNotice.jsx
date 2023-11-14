import { useNavigate } from 'react-router-dom';
import { TbArrowNarrowLeft } from 'react-icons/tb';

const NotReadyNotice = () => {
  const navigate = useNavigate();

  return (
    <section className='w-full grow flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>We're getting your board ready!</h1>
      <p className='text-gray-400'>Check back in a few seconds.</p>
      <button
        onClick={() => navigate('/boards')}
        className='bg-accent rounded text-2xl w-fit flex items-center gap-1 py-1 px-2 m-4 hover:bg-opacity-80 focus:bg-light outline-accent'>
        <TbArrowNarrowLeft />
        <span className='text-base p-1'>Back to Boards</span>
      </button>
    </section>
  )
}

export default NotReadyNotice