import firebase from "firebase";

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCK4xRTPXybOQaxc2NamqX6e3ta0J1Hsmk",
  authDomain: "testingfirebase-ef783.firebaseapp.com",
  projectId: "testingfirebase-ef783",
  storageBucket: "testingfirebase-ef783.appspot.com",
  messagingSenderId: "330329855415",
  appId: "1:330329855415:web:9b88232fe12ca3824c8432",
};

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;

// const firebaseConfig = {
//   apiKey: "AIzaSyB6Fz2M1J_aQhzHlt3SYsWKdl3un1CzdjQ",
//   authDomain: "linkedinclone-22697.firebaseapp.com",
//   projectId: "linkedinclone-22697",
//   storageBucket: "linkedinclone-22697.appspot.com",
//   messagingSenderId: "78301276373",
//   appId: "1:78301276373:web:2339c07372fc36218e1a5c",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
