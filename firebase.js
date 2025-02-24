// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBnzNzkxgEVsgGPVA9ZgvolyE0QQjvt0MM",
//   authDomain: "go-together-10b7d.firebaseapp.com",
//   projectId: "go-together-10b7d",
//   storageBucket: "go-together-10b7d.firebasestorage.app",
//   messagingSenderId: "170518200870",
//   appId: "1:170518200870:web:5703b253caa315fb381ce7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider()
// const auth = getAuth()

// export { app, provider, auth}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnzNzkxgEVsgGPVA9ZgvolyE0QQjvt0MM",
  authDomain: "go-together-10b7d.firebaseapp.com",
  projectId: "go-together-10b7d",
  storageBucket: "go-together-10b7d.firebasestorage.app",
  messagingSenderId: "170518200870",
  appId: "1:170518200870:web:5703b253caa315fb381ce7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app); // Initialize Firestore with the Firebase app

export { app, provider, auth, db }; // Export the Firestore instance
