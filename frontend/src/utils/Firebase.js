
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginoneecart.firebaseapp.com",
  projectId: "loginoneecart",
  storageBucket: "loginoneecart.firebasestorage.app",
  messagingSenderId: "571642928",
  appId: "1:571642928:web:ef3e5d165e9c0fcb8449f5",
  measurementId: "G-CGLVMLM4W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}