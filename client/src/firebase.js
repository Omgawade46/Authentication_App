// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-89739.firebaseapp.com",
  projectId: "auth-app-89739",
  storageBucket: "auth-app-89739.appspot.com",
  messagingSenderId: "110774661760",
  appId: "1:110774661760:web:e5ce2230d7b31c868f2c65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);