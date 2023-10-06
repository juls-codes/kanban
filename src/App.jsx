import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import AuthView from './views/AuthView';
import { auth } from './firebase';
import useStore from './store';
import AppLoader from './components/AppLoader';
import PublicRoute from './utils/PublicRoute';
import BoardsView from './views/BoardsView';
import PrivateRoute from './utils/PrivateRoute';

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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicRoute Component={AuthView} />}/>
        <Route path='/boards' element={<PrivateRoute Component={BoardsView} />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App