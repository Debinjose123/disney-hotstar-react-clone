import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDFDK4q8iCoVy9uJk0wi18LLK24fT6FwUw",
    authDomain: "disney-plus-clone-61ffd.firebaseapp.com",
    projectId: "disney-plus-clone-61ffd",
    storageBucket: "disney-plus-clone-61ffd.appspot.com",
    messagingSenderId: "527215638776",
    appId: "1:527215638776:web:51587755e8a47248f3230d",
    measurementId: "G-72VQ4MQ5S6"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;