import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-33ca8.firebaseapp.com",
  projectId: "reactchat-33ca8",
  storageBucket: "reactchat-33ca8.appspot.com",
  messagingSenderId: "893594389584",
  appId: "1:893594389584:web:a7a5d0172fb3d951539555"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()