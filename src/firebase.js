// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6LnsrCJxiDBFefDat9c5CItiqjJBjUzs",
  authDomain: "taxup-a29ed.firebaseapp.com",
  projectId: "taxup-a29ed",
  storageBucket: "taxup-a29ed.firebasestorage.app",
  messagingSenderId: "362153011359",
  appId: "1:362153011359:web:f551666cbcb849e8121aaa",
  measurementId: "G-ZL7NPLS1GJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
