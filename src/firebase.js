// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb2Kb4E64nO1zfHEOyQ2xyzS86DpF1_-A",
  authDomain: "flowers-6c6d2.firebaseapp.com",
  databaseURL: "https://flowers-6c6d2-default-rtdb.firebaseio.com",
  projectId: "flowers-6c6d2",
  storageBucket: "flowers-6c6d2.appspot.com",
  messagingSenderId: "648268489017",
  appId: "1:648268489017:web:3d658d76386773623f08e8"
};

// Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export{
  storage, firestore as default
}