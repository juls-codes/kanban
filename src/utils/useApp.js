import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';


const useApp = () => {
  const { currentUser: { uid } } = getAuth();

  const createBoard = async ({ name, boardColour }) => {
    const collectionRef = collection(db, `users/${uid}/boards`);
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

  return { createBoard };
}

export default useApp