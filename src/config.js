import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDb2Kb4E64nO1zfHEOyQ2xyzS86DpF1_-A",
    authDomain: "flowers-6c6d2.firebaseapp.com",
    databaseURL: "https://flowers-6c6d2-default-rtdb.firebaseio.com",
    projectId: "flowers-6c6d2",
    storageBucket: "flowers-6c6d2.appspot.com",
    messagingSenderId: "648268489017",
    appId: "1:648268489017:web:3d658d76386773623f08e8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};