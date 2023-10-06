import { create } from 'zustand';

const useStore = create(set => ({
  loader: true,
  isLoggedIn: false,
  setLoginStatus: status => set({
    loader: false,
    isLoggedIn: status
  })
}));

export default useStore;


