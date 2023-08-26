import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsxYxi9zlUPuvoShKjTrPYP0BjU4qFCiM",
  authDomain: "cake-force.firebaseapp.com",
  projectId: "cake-force",
  storageBucket: "cake-force.appspot.com",
  messagingSenderId: "56652711190",
  appId: "1:56652711190:web:224ecd82da95779e427c37"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);