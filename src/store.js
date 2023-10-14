import { create } from 'zustand';

// This custom hook is used to manage the application's global states
const useStore = create(set => ({
  loader: true,
  isLoggedIn: false,
  boards: [],
  areBoardsFetched: false,
  setBoards: (boards) =>
    set({
      boards,
      areBoardsFetched: true,
    }),
  setLoginStatus: (status) =>
    set({
      loader: false,
      isLoggedIn: status,
    })
}));

export default useStore;


