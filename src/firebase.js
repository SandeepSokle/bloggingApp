


import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAJ_ni5mqUdNn7qAwCg3L91X3M-sE5G1Wk",
  authDomain: "blogapp-5f96e.firebaseapp.com",
  projectId: "blogapp-5f96e",
  storageBucket: "blogapp-5f96e.appspot.com",
  messagingSenderId: "479156629100",
  appId: "1:479156629100:web:7be69446c49d99966bf249",
  measurementId: "G-6B2005PY6X",
};
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()

let provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = ()=> auth.signInWithPopup(provider)
export const firestore = firebase.firestore();

export default firebase;