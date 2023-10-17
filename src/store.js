import { create } from 'zustand';

// This custom hook is used to manage the application's global states.
// addBoard: Used to add a newly created board, represented by the 'board' parameter, to the existing 'boards'. set() is used as a state-setting function which takes an argument, 'old', representing the previous state of 'boards'. The spread operator is used on 'old' to create a new array that includes the new 'board'. 
const useStore = create(set => ({
  loader: true,
  isLoggedIn: false,
  boards: [],
  areBoardsFetched: false,
  toastrMsg: '',
  setBoards: (boards) =>
    set({
      boards,
      areBoardsFetched: true,
    }),
  addBoard: board =>
    set((old) =>
      ({ boards: [board, ...old.boards] })
    ),
  setLoginStatus: (status) =>
    set({
      loader: false,
      isLoggedIn: status,
      boards: [],
      areBoardsFetched: false
    }),
  
}));

export default useStore;


