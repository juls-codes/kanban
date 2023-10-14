import {
  addDoc,
  getDocs,
  collection,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import useStore from '../store';

// This custom hook uses Firebase Authentication and Firebase to manage user-specific collections and documents. It retrieves the currently logged-in user's unique identified (uid) and uses it to create a reference to the 'boards' collection of that specific user. 
const useApp = () => {
  const { currentUser: { uid } } = getAuth();
  const collectionRef = collection(db, `users/${uid}/boards`);
  const { setBoards } = useStore();

  // This function creates a new 'board' document in the user's 'boards' collection. It points to the 'boards' collection using the path defined within 'collectionRef' reference.
  const createBoard = async ({ name, boardColour }) => {
    try {
      await addDoc(collectionRef, {
        name,
        boardColour,
        createdAt: serverTimestamp(),
      });
    } catch(err) {
      console.log(err);
    }
  };

  // This function fetches all the 'board' documents in the user's 'boards' collection. If no error, the promise resolves to an object containing an array of documents, each representing a single 'board'. The documents are mapped into a new array where each document transformed into a new object with additional properties.
  const fetchBoards = async(setLoading) => {
    try {
      const fetchedBoardDocs = await getDocs(collectionRef);
      const boards = fetchedBoardDocs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt.toDate().toLocaleDateString(),
      }));
      setBoards(boards);
      console.log(boards);
    } catch(err) {
      console.log(err);      
    } finally {
      if (setLoading) {
        setLoading(false);
      };
    }
  }

  return { createBoard, fetchBoards };
}

export default useApp