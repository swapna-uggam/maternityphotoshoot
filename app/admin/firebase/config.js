// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyB-gZZkLdFlC1_LzqaKRWPg6yUM_GJhBrY",
//   authDomain: "snapu-maternity.firebaseapp.com",
//   projectId: "snapu-maternity",
//   storageBucket: "snapu-maternity.firebasestorage.app",
//   messagingSenderId: "626029932985",
//   appId: "1:626029932985:web:6efa19b05b19d655efc668",
//   measurementId: "G-NZFZRHM3HP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);


// ----------------------------------------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoNtMWHJRNrMV-kP1n2HF12ir_mjbbLHg",
  authDomain: "maternity-397eb.firebaseapp.com",
  projectId: "maternity-397eb",
  storageBucket: "maternity-397eb.firebasestorage.app",
  messagingSenderId: "492595632432",
  appId: "1:492595632432:web:3f51850ad50849e6bc90f5",
  measurementId: "G-LWQQ1GKZQR" // This is optional and not needed unless you're using analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
