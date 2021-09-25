import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDR9hiHRLGjj6oQaYYkHwosaFuosL6-vrI",
  authDomain: "s2-clone.firebaseapp.com",
  projectId: "s2-clone",
  storageBucket: "s2-clone.appspot.com",
  messagingSenderId: "1039835381342",
  appId: "1:1039835381342:web:bc06834ff0e8a6371abecf",
  measurementId: "G-KNGT30NGTB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
