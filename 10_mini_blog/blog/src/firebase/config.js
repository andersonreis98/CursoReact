import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1aoIOMvzMr1PlzW5TkIY2OSPsK09gN0c",
  authDomain: "fir-app-8377a.firebaseapp.com",
  databaseURL: "https://fir-app-8377a.firebaseio.com",
  projectId: "fir-app-8377a",
  storageBucket: "fir-app-8377a.appspot.com",
  messagingSenderId: "5343004653",
  appId: "1:5343004653:web:2d4e431858535dbadd09e4",
  measurementId: "G-0N4QQG4YX6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
