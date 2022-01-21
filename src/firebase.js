import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6Fz2M1J_aQhzHlt3SYsWKdl3un1CzdjQ",
  authDomain: "linkedinclone-22697.firebaseapp.com",
  projectId: "linkedinclone-22697",
  storageBucket: "linkedinclone-22697.appspot.com",
  messagingSenderId: "78301276373",
  appId: "1:78301276373:web:2339c07372fc36218e1a5c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
