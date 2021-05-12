
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDmoeRqHWM0by3ON15ze36NeEfjkDqLtis",
    authDomain: "disney-clone-fcb94.firebaseapp.com",
    projectId: "disney-clone-fcb94",
    storageBucket: "disney-clone-fcb94.appspot.com",
    messagingSenderId: "381061148224",
    appId: "1:381061148224:web:59c371edecf1de4ab279a5",
    measurementId: "G-20SRW3G9E3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db =firebaseApp.firestore();
   const auth = firebaseApp.auth();
  const Provider =  new firebase.auth.GoogleAuthProvider();
  
  const storage = firebase.storage();

  export {auth ,storage , Provider}

  export default  db