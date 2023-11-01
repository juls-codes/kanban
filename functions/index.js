// Import function (event triggers) from Firestore
const { initializeApp } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { onDocumentCreated, onDocumentDeleted } = require('firebase-functions/v2/firestore');

initializeApp();

// Each board has two firestore documents; one fetched for the boardsView and one for boardView. The latter is created via a Firestore event trigger (onDocumentCreated) when the former is created.
exports.createboardData = onDocumentCreated('users/{uid}/boards/{boardId}', async (event) => {
  const { uid, boardId } = event.params;
  const firestore = getFirestore();

  return await firestore.doc(`users/${uid}/boardsData/${boardId}`).set({
    tabs: {
      toDo: [],
      inProgress: [],
      completed: []
    },
    lastUpdated: FieldValue.serverTimestamp(),
  });
})

// When the document of a specific boardId is deleted in the 'boards' collection, its associated document (same boardId) is deleted in the 'boardsData' collection via a Firestore event trigger (onDocumentDeleted).
exports.deleteboardData = onDocumentDeleted('users/{uid}/boards/{boardId}', async (event) => {
  const { uid, boardId } = event.params;
  const firestore = getFirestore();

  return await firestore.doc(`users/${uid}/boardsData/${boardId}`).delete();
})