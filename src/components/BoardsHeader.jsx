// import { useState } from 'react';
import { TbPlus } from 'react-icons/tb';
import { TbLogout } from 'react-icons/tb';
import Logo from '../assets/kanban.png';

const BoardsHeader = () => {


  return (
    <header className='bg-light p-4 pt-8 flex justify-between drop-shadow-md'>

      <div className='flex items-center gap-2 w-fit'>
        <img src={Logo} alt='Project logo' width={20} height={20}/>
        <h1 className='text-3xl'>Kanban</h1>
      </div>

      <div className='text-2xl flex'>
        <button aria-label='Create Board' className='bg-accent p-1 rounded mr-3 h-fit flex hover:bg-dark'>
          <TbPlus />
          <span className='text-base hidden mx-2 sm:inline'>Create Board</span>
        </button>
        <button aria-label='Logout' className='p-1 flex h-fit hover:bg-dark rounded'>
          <TbLogout />
          <span className='text-base hidden mx-2 sm:inline'>Logout</span>
        </button>
      </div>

    </header>
  )
}

export default BoardsHeader