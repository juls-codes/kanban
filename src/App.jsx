import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import useStore from './store';
import AppLoader from './components/AppLoader';
import ToastrManager from './components/ToastrManager';

// Route Guards
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

// Views
import AuthView from './views/AuthView';
import BoardsView from './views/BoardsView';
import BoardView from './views/BoardView';


const App = () => {
  const { loader, setLoginStatus } = useStore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoginStatus(!!user);
    });

    // Clean up function; stop listing to changes when component unmounts
    return () => unsub();
  },[])

  if(loader) return <AppLoader />

  return (
    <>
    <ToastrManager />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoute Component={AuthView} />}/>
        <Route path='/boards' element={<PrivateRoute Component={BoardsView} />}/>
        <Route path='/boards/:boardId' element={<PrivateRoute Component={BoardView} />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App