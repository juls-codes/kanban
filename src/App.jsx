import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import Auth from './views/Auth';
import { auth } from './firebase';

const App = () => {

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });

    // Clean up function; stop listing to changes when component unmounts
    return () => unsub();
  })

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />}/>
        {/* <Route path='/boards' element={}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App