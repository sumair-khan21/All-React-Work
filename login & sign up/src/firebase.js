// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwfd_x0IZ_vjh2KgrfNlP49oggvDOJV84",
  authDomain: "signup-todo.firebaseapp.com",
  projectId: "signup-todo",
  storageBucket: "signup-todo.appspot.com",
  messagingSenderId: "517853168060",
  appId: "1:517853168060:web:fe0183bf8fc9c7e157ebb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth();

export { db, auth };