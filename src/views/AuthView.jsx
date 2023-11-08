import Logo from '../assets/kanban.png';
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';
import useStore from '../store';
import { toast } from 'react-toastify';

const initForm = {
  email: '',
  password: '',
}

const AuthView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const authText = isRegistered ? "Don't have an account? Click here to register." : "Already have an account? Click here to login.";

  // Using useState(), we create a state variable with the an initial state that is set to 'initForm'. On render, form will have the same structure as 'initForm', with 'email' and 'password' properties initialized as empty strings.
  const [form, setForm] = useState(initForm);

  // This function takes an event as its argument. It runs setForm() to update the 'form' state. We use the spread operator on the previous state, 'oldForm', to copy all of its properties to the new state object. We store new values to the object's properties based on the name of the input field that triggered the event, assigning the value to that corresponding property.
  const handleFormChange = (e) => setForm((oldForm) => ({...oldForm, [e.target.name]: e.target.value}));

  const handleAuth = async () => { 
    try {
      setIsLoading(true);
      if (isRegistered){
        await signInWithEmailAndPassword(auth, form.email, form.password);
      } else {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
      }
    } catch (error) {
      const msg = error.code.split('auth/')[1].split('-').join(' ').replace(/\b\w/, match => match.toUpperCase());
      console.log(msg);
      toast(msg);
      setIsLoading(false);
    }
  };

  return (
    <main className='h-screen text-sm flex flex-col items-center justify-center gap-8 '>
      <section className='flex flex-col justify-center items-center space-y-2'>
        <img src={Logo} alt='Kanban App logo' width={180} height={30}/>
        <h1 className='sr-only text-3xl'>Kanban Board App</h1>
        <p className='text-center text-gray-400'>Effortless task management starts here</p>
      </section>

      <section className='flex flex-col gap-2 w-[288px]'>
        <label htmlFor='auth-email' className='font-mono'>Email</label>
        <input
          type='text'
          id='auth-email'
          name='email'
          value={form.email}
          onChange={handleFormChange}
          placeholder='Email'
          className='bg-transparent border border-gray-600 rounded p-2 focus:outline-accent'/>

        <label htmlFor='auth-password' className='font-mono'>Password</label>
        <input
          type='text'
          id='auth-password'
          name='password'
          value={form.password}
          onChange={handleFormChange}
          placeholder='Password'
          className='bg-transparent border border-gray-600 rounded p-2 focus:outline-accent'
        />
        <button
          className='font-mono bg-accent rounded p-2 mt-2 disabled:bg-light focus:outline-accent focus:bg-dark hover:bg-opacity-80'
          onClick={handleAuth}
          disabled={isLoading || !form.email.trim() || !form.password.trim()}
          >
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

export default AuthView