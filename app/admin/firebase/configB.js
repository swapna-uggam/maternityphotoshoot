// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfigB = {
//   apiKey: "AIzaSyCBT6Z8btjIOu0FAvg4eZFdN5X8rlWEQM8",
//   authDomain: "packages-9624e.firebaseapp.com",
//   projectId: "packages-9624e",
//   storageBucket: "packages-9624e.firebasestorage.app",
//   messagingSenderId: "63851835533",
//   appId: "1:63851835533:web:d17ae7423fd2c6dc5cf2c4",
//   measurementId: "G-CB9H4EHRG1"
// };
// const appB = initializeApp(firebaseConfigB,"secondary");
// export const authB = getAuth(appB);
// export const dbB = getFirestore(appB);

// ---------------------------------------


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfigB = {
  apiKey: "AIzaSyACwxoFXr5PJRiQhu0vK3ceJk6r-hAE_cg",
  authDomain: "packgesforsnapu.firebaseapp.com",
  projectId: "packgesforsnapu",
  storageBucket: "packgesforsnapu.firebasestorage.app",
  messagingSenderId: "754088266525",
  appId: "1:754088266525:web:259e2dac44778e6df7aff4",
  measurementId: "G-WJW6M1QRWL"
};
const appB = initializeApp(firebaseConfigB,"secondary");
export const authB = getAuth(appB);
export const dbB = getFirestore(appB);
