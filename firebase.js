// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrQdLnsaMFcsmE6aPhqjcRiNhh4Hb5XL0",
  authDomain: "ig-clone-a0c60.firebaseapp.com",
  projectId: "ig-clone-a0c60",
  storageBucket: "ig-clone-a0c60.appspot.com",
  messagingSenderId: "786361825416",
  appId: "1:786361825416:web:967113e0d6ac38d8f5073d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

export {app, db, auth}