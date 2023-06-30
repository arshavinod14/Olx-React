import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBkG76Eg4MZ_W8LyQ-mdhNjIsWVR2_cqfE",
    authDomain: "olx-proj-5c820.firebaseapp.com",
    projectId: "olx-proj-5c820",
    storageBucket: "olx-proj-5c820.appspot.com",
    messagingSenderId: "639564060281",
    appId: "1:639564060281:web:927b032ed26a1d8ef9a6a8",
    measurementId: "G-S0R95G63BD"
  };

export default firebase.initializeApp(firebaseConfig)

