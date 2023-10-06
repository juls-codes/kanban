import { Navigate } from 'react-router-dom'
import useStore from '../store'

const PrivateRoute = ( {Component} ) => {
  const { isLoggedIn } = useStore();

  return (
    // if isLoggedIn is false (user is not logged in), navigate to AuthView
    // Otherwise, if isLoggedIn is true (user is logged in), navigate to the Component prop (BoardsView)
    !isLoggedIn ? <Navigate to='/' replace /> : <Component />
  )
}

export default PrivateRoute