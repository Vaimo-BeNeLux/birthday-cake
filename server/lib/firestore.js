import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    setDoc
  } from "firebase/firestore";
  import { db } from "./firebase";
  
  export const queryByCollection = async (col) => {
    const colRef = collection(db, col);
    const colSnapshot = await getDocs(colRef);
    const docs = colSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
    return { data: docs }
  };
  
  export const set = async (col, document) => {
    await setDoc(doc(collection(db, col)), document, { merge: true });
  };
  
  export const add = async (col, document) => {
    const colRef = collection(db, col);
    const docRef = await addDoc(colRef, document);
    return docRef;
  };
  
  export const del = async (col, id) => {
    const docRef = doc(db, col, id);
    return await deleteDoc(docRef);
  };
  