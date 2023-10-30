import { signOut } from 'firebase/auth';
import { auth } from '../../firebase'
import { TbLogout, TbPlus } from 'react-icons/tb';
import Logo from '../../assets/kanban.png';

const BoardsHeader = ({ openModal }) => {

  return (
    <header className='bg-light p-4 pt-6 flex justify-between drop-shadow-md'>

      <div className='flex items-center gap-4 w-fit'>
        <img src={Logo} alt='Project logo' width={20} height={20}/>
        <h1 className='text-3xl'>Kanban</h1>
      </div>

      <div className='text-2xl flex gap-2'>
        <button
          onClick={openModal}
          aria-label='Create Board'
          className='bg-accent rounded flex items-center h-fit p-1 hover:bg-dark focus:bg-dark outline-accent'>
            <TbPlus />
            <span className='text-base hidden mx-1 sm:inline'>Create Board</span>
        </button>
        <button
          onClick={() => signOut(auth)}
          aria-label='Logout'
          className='rounded flex items-center gap-1 h-fit p-[0.3rem] hover:bg-dark focus:bg-dark outline-accent'>
          <TbLogout />
          <span className='text-base hidden mx-1 sm:inline'>Logout</span>
        </button>
      </div>

    </header>
  )
}

export default BoardsHeader