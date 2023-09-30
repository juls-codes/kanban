import Logo from '../../assets/kanban.png';
import { useState } from "react";

const Auth = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const authText = isRegistered ? "Don't have an account? Click here to register." : "Already have an account? Click here to login.";

  return (
    <main className='flex flex-col items-center gap-8 text-sm'>
      <section>
        <div className='flex items-center gap-2 w-fit mx-auto'>
          <img src={Logo} alt="Project logo" width={20} height={20}/>
          <h1 className='text-3xl'>Kanban</h1>
        </div>
        <p className='text-center text-gray-400'>Effortless task management starts here</p>
      </section>

      <section className='flex flex-col gap-2 w-[288px]'>
        <input
          type="text"
          placeholder='Email'
          className='bg-transparent border border-gray-600 rounded p-2 focus:outline-accent'/>
        <input
          type="text"
          placeholder='Password'
          className='bg-transparent border border-gray-600 rounded p-2 focus:outline-accent'/>
        <button className='font-mono bg-accent rounded p-2 focus:outline-accent focus:bg-opacity-80 hover:bg-opacity-80'>
          {isRegistered ? 'Login' : 'Create Account'}
        </button>
        <p tabIndex='0'
          onClick={() => setIsRegistered(!isRegistered)}
          onKeyDown={(e) => {
            if (e.key === 'Enter'){
              setIsRegistered(!isRegistered);
            }
          }}
          className='text-center mt-4 cursor-pointer hover:underline'>
          {authText}        
        </p>
      </section>
    </main>
  )
}

export default Auth