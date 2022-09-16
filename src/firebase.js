import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDNG6F074Cx0BecuD4PVsQTMD813IXgm5s",
    authDomain: "infoedge-hackathon1.firebaseapp.com",
    projectId: "infoedge-hackathon1",
    storageBucket: "infoedge-hackathon1.appspot.com",
    messagingSenderId: "375758989930",
    appId: "1:375758989930:web:18c4d01bd7648d5e63f813",
    measurementId: "G-EHFCMNX51E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};