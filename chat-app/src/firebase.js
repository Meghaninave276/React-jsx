// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYugPezP3TflhHvprYewThO7bNuumOyeU",
  authDomain: "fir-book-c7ccf.firebaseapp.com",
  projectId: "fir-book-c7ccf",
  storageBucket: "fir-book-c7ccf.firebasestorage.app",
  messagingSenderId: "960097601947",
  appId: "1:960097601947:web:8290074b93b30bb252b93e",
  measurementId: "G-Q240C8HKNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);