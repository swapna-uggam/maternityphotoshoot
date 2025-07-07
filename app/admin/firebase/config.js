import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-gZZkLdFlC1_LzqaKRWPg6yUM_GJhBrY",
  authDomain: "snapu-maternity.firebaseapp.com",
  projectId: "snapu-maternity",
  storageBucket: "snapu-maternity.firebasestorage.app",
  messagingSenderId: "626029932985",
  appId: "1:626029932985:web:6efa19b05b19d655efc668",
  measurementId: "G-NZFZRHM3HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




