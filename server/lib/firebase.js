// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

export const firestoreDB = getFirestore(firebaseApp);