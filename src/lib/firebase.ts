import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDV17yBkpO31V2upDAMqVpFRSbTs-Df3CY",
  authDomain: "decideai-a1b44.firebaseapp.com",
  projectId: "decideai-a1b44",
  storageBucket: "decideai-a1b44.appspot.com",
  messagingSenderId: "120502549994",
  appId: "1:120502549994:web:fb25a1aebfa1299bafc693",
  measurementId: "G-F2B1G0ZCRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

