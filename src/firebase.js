import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB82lcaggPW1aDQmPaEAHMouhagKramXVM",
    authDomain: "test-3a46e.firebaseapp.com",
    databaseURL: "https://test-3a46e-default-rtdb.firebaseio.com",
    projectId: "test-3a46e",
    storageBucket: "test-3a46e.firebasestorage.app",
    messagingSenderId: "260629427212",
    appId: "1:260629427212:web:37633ccdfd699aadb66a29",
    measurementId: "G-MEDH219G84"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
