import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'



var firebaseConfig = {
    apiKey: "AIzaSyCqlMVXODZKCiuDBH-8tK_Ws2AFCmRrAQ8",
    authDomain: "chatapp-3fb76.firebaseapp.com",
    projectId: "chatapp-3fb76",
    storageBucket: "chatapp-3fb76.appspot.com",
    messagingSenderId: "257675970977",
    appId: "1:257675970977:web:fa96760e5104207e8423e0",
    measurementId: "G-GT6C50YTWL"
  };

  
  firebase.initializeApp(firebaseConfig);
  export default firebase 

 