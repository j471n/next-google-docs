import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFxFGdHl9obp9j_eIYebG2Ywd_QKp0rgE",
  authDomain: "next--docs-719cd.firebaseapp.com",
  projectId: "next--docs-719cd",
  storageBucket: "next--docs-719cd.appspot.com",
  messagingSenderId: "725211284405",
  appId: "1:725211284405:web:7ddb1da1664a79228ccffc",
  measurementId: "G-B9PNJTTN4T",
};

// checking whether the app is already initialize or not
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// initialize db
const db = app.firestore();

// exporting db
export { db, firebaseConfig };
