// import { useState } from 'react';
import { TbPlus } from 'react-icons/tb';
import { TbLogout } from 'react-icons/tb';
import Logo from '../assets/kanban.png';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'

const BoardsHeader = ({ openModal }) => {

  return (
    <header className='bg-light p-4 pt-8 flex justify-between drop-shadow-md'>

      <div className='flex items-center gap-2 w-fit'>
        <img src={Logo} alt='Project logo' width={20} height={20}/>
        <h1 className='text-3xl'>Kanban</h1>
      </div>

      <div className='text-2xl flex'>
        <button
          onClick={openModal}
          aria-label='Create Board'
          className='bg-accent p-1 rounded flex h-fit mr-3 hover:bg-dark focus:bg-dark outline-accent'>
            <TbPlus />
            <span className='text-base hidden mx-2 sm:inline'>Create Board</span>
        </button>
        <button
          onClick={() => signOut(auth)}
          aria-label='Logout'
          className='p-1 rounded flex h-fit hover:bg-dark focus:bg-dark outline-accent'>
          <TbLogout />
          <span className='text-base hidden mx-2 sm:inline'>Logout</span>
        </button>
      </div>

    </header>
  )
}

export default BoardsHeader