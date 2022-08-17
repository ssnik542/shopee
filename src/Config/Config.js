import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD-l7W3v7Rg9X8V094mW6tXoiS1u0guY3A",

  authDomain: "ecommerce-4b808.firebaseapp.com",

  projectId: "ecommerce-4b808",

  storageBucket: "ecommerce-4b808.appspot.com",

  messagingSenderId: "442816058467",

  appId: "1:442816058467:web:99eda62fa0ba1d4e665456",

  measurementId: "G-4BGNVPEJ2Z"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}