import { useEffect } from 'react';
import useStore from '../store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastrManager = () => {
  const { toastrMsg } = useStore();

  useEffect(() => {
    if(toastrMsg){
      toast(toastrMsg);
    }
  }, [toastrMsg]);

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        limit={3}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        className={'text-white'}
        theme='dark'
        toastClassName={'bg-accent text-white font-mono'}
      />
    </div>
  )
}

export default ToastrManager