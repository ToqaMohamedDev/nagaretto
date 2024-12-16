// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_uVmoF3Cu9hWCVrcWuklGinTpQ07GAP0",
  authDomain: "eccommmm.firebaseapp.com",
  projectId: "eccommmm",
  storageBucket: "eccommmm.firebasestorage.app",
  messagingSenderId: "276579700204",
  appId: "1:276579700204:web:1f99f4c4416812010584c9",
  measurementId: "G-GXTB5WYQNT"
};

// Initialize Firebase
const app =!getApps().length? initializeApp(firebaseConfig):getApp;

const db= getFirestore(app);

export {app,db}