import { Navigate } from 'react-router-dom'
import useStore from '../store'

const PublicRoute = ({Component}) => {
  const { isLoggedIn } = useStore();

  return (
    // If isLoggedIn is true (user is logged in), navigate to BoardsView
    // Otherwise, if isLoggedIn is false (user is not logged in), navigate to the Component prop (AuthView)
    isLoggedIn ? <Navigate to='/boards' replace /> : <Component />
  )
}

export default PublicRoute