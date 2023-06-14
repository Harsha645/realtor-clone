// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP_kzKf63heiyPyZUkHahKAyvzIZTZ-pQ",
  authDomain: "realtor-clone-de0a2.firebaseapp.com",
  projectId: "realtor-clone-de0a2",
  storageBucket: "realtor-clone-de0a2.appspot.com",
  messagingSenderId: "753030606216",
  appId: "1:753030606216:web:c006828577c3c8f280de3d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()