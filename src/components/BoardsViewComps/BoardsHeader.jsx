import Logo from '../../assets/kanban.png';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase'
import { TbLogout, TbPlus } from 'react-icons/tb';

const BoardsHeader = ({ showNewBoardModal }) => {

  return (
    <header className='bg-light drop-shadow-md'>
      <div className='grid grid-cols-frAutoAuto max-w-xl mx-auto space-x-3 p-4'>
        <img src={Logo} alt='Project logo' width={160} height={27} />

        <button
          onClick={showNewBoardModal}
          aria-label='Create board'
          className='bg-accent rounded text-2xl flex items-center h-fit p-1 hover:bg-dark focus:bg-dark outline-accent'>
            <TbPlus />
            <span className='text-base hidden mx-1 sm:inline'>Create Board</span>
        </button>
        
        <button
          onClick={() => signOut(auth)}
          aria-label='Logout'
          className='rounded text-2xl flex items-center gap-1 h-fit p-[0.3rem] hover:bg-dark focus:bg-dark outline-accent'>
          <TbLogout />
          <span className='text-base hidden mx-1 sm:inline'>Logout</span>
        </button>
      </div>
    </header>
  )
}

export default BoardsHeader