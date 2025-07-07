import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfigB = {
  apiKey: "AIzaSyCBT6Z8btjIOu0FAvg4eZFdN5X8rlWEQM8",
  authDomain: "packages-9624e.firebaseapp.com",
  projectId: "packages-9624e",
  storageBucket: "packages-9624e.firebasestorage.app",
  messagingSenderId: "63851835533",
  appId: "1:63851835533:web:d17ae7423fd2c6dc5cf2c4",
  measurementId: "G-CB9H4EHRG1"
};
const appB = initializeApp(firebaseConfigB,"secondary");
export const authB = getAuth(appB);
export const dbB = getFirestore(appB);