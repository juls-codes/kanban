import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';

// This custom hook uses Firebase Authentication and Firebase to manage user-specific collections and documents. It retrieves the currently logged-in user's unique identified (uid) and uses it to create a reference to the 'boards' collection of that specific user. 
const useApp = () => {
  const navigate = useNavigate();

  const { currentUser: { uid } } = getAuth();
  const collectionRef = collection(db, `users/${uid}/boards`);
  const { boards, setBoards, addBoard } = useStore();

  // This function updates a 'boardsData' document, referencing to that document using the boardId
  const updateBoard = async(boardId, tabs) => {
    const docRef = doc(db, `users/${uid}/boardsData/${boardId}`);
    try {
      await updateDoc(docRef, { tabs, lastUpdated: serverTimestamp() });
    } catch(err) {
      toast('Error updating board');
      throw err;
    };
  }

  // This function creates a new 'board' document in the user's 'boards' collection. It points to the 'boards' collection using the path defined within 'collectionRef' reference.
  const createBoard = async ({name, boardColour}) => {
    try {
      const doc = await addDoc(collectionRef, {
        name,
        boardColour,
        createdAt: serverTimestamp(),
      });
      addBoard ({
        name,
        boardColour,
        createdAt: new Date().toLocaleString('en-US'),
        id: doc.id
      });
    } catch(err) {
      toast('Error creating board');
      throw err;
    }
  };

  // This function fetches the data of a single 'board' document using boardID as a parameter used to intialize a reference to the document. We use getDoc() to retrieve the document and checks to see if the document exists within the database before returning the data contained within the document.
  const fetchBoard = async(boardId) => {
    const docRef = doc(db, `users/${uid}/boardsData/${boardId}`);
    try {
      const doc = await getDoc(docRef);
      if(doc.exists){
        return doc.data();
      }
    } catch(err) {
      toast('Error fetching board');
      throw err;
    }
  }

  // This function fetches all the 'board' documents in the user's 'boards' collection. If no error, the promise resolves to an object containing an array of documents, each representing a single 'board'. The documents are mapped into a new array where each document transformed into a new object with additional properties.
  const fetchBoards = async(setLoading) => {
    try {
      const q = query(collectionRef, orderBy('createdAt', 'desc'));
      const fetchedBoardDocs = await getDocs(q);

      const boards = fetchedBoardDocs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt.toDate().toLocaleString('en-US'),
      }));
      setBoards(boards);
      
    } catch(err) {
      toast('Error fetching boards');
    } finally {
      if (setLoading) {
        setLoading(false);
      };
    }
  }

  // This function deletes a document in the user's 'boards' collection. This will also create a new array of boards with IDs that don't match the boardID passed, update the local state of the boards array, and pushes the user back to the 'All Boards' screen.
  const deleteBoard = async(boardId) => {
    try {
      const docRef = doc(db, `users/${uid}/boards/${boardId}`);
      await deleteDoc(docRef);

      const updatedBoards = boards.filter(board => board.id !== boardId);
      setBoards(updatedBoards);
      navigate('/boards');

    } catch(err) {
      toast('Error deleting the board');
      throw err;
    }
  }

  return { createBoard, fetchBoard, fetchBoards, updateBoard, deleteBoard };
}

export default useApp