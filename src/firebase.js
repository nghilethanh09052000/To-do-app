// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRONLVrEn6iZWMWZ8fiOa-vCUtAHzxj1o",
  authDomain: "todolist-57cd9.firebaseapp.com",
  projectId: "todolist-57cd9",
  storageBucket: "todolist-57cd9.appspot.com",
  messagingSenderId: "909441050923",
  appId: "1:909441050923:web:5d62d1f3e2bac7e209bd6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export  {db};