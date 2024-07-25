// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-68343.firebaseapp.com",
  projectId: "auth-68343",
  storageBucket: "auth-68343.appspot.com",
  messagingSenderId: "339524968981",
  appId: "1:339524968981:web:97b079fe0bf9dd01d3e41c",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
