import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1m2ePFWc9HQ0elK1rE4sjZY1ua1Llwlo",
  authDomain: "my-todo-list-fadcd.firebaseapp.com",
  projectId: "my-todo-list-fadcd",
  storageBucket: "my-todo-list-fadcd.appspot.com",
  messagingSenderId: "268458828060",
  appId: "1:268458828060:web:137ef66370c4b416699ad9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };
