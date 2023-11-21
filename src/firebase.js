// import firebase from "firebase/app";
// import "firebase/database";

// var firebaseConfig = {
//     apiKey: "AIzaSyBMP9XQZ4t8By7bhluD6C2Tnph2EwO6uWY",
//     authDomain: "react-demo-b4bbe.firebaseapp.com",
//     databaseURL: "https://react-demo-b4bbe-default-rtdb.firebaseio.com",
//     projectId: "react-demo-b4bbe",
//     storageBucket: "react-demo-b4bbe.appspot.com",
//     messagingSenderId: "948108242742",
//     appId: "1:948108242742:web:73d373f4ccf7ab92870d97"
//   };
//   // Initialize Firebase
//   const fireDb = firebase.initializeApp(firebaseConfig);

//   export default fireDb.database().ref();


import firebase from "firebase/app";
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyBSiK2ZOexTNQlWKA_rD94OpKkViDxtA6w",
  authDomain: "react-contacts-fd7d4.firebaseapp.com",
  databaseURL: "https://react-contacts-fd7d4-default-rtdb.firebaseio.com",
  projectId: "react-contacts-fd7d4",
  storageBucket: "react-contacts-fd7d4.appspot.com",
  messagingSenderId: "429898308630",
  appId: "1:429898308630:web:adef5b2f65700093232937"
};

// Initialize Firebase
const fireDb  = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();