import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA4tYBw0KBVjMCUw9NC3HIObMst9B8kj6I",
  authDomain: "fir-tutorial-86521.firebaseapp.com",
  projectId: "fir-tutorial-86521",
  storageBucket: "fir-tutorial-86521.appspot.com",
  messagingSenderId: "82132595043",
  appId: "1:82132595043:web:5b7397db06ead1b2c16356",
  measurementId: "G-0GTDW6J9ML"
};

// create connection , but this does not guarantee that we have firestore database
const app = initializeApp(firebaseConfig);

// connect to our created db
export const db = getFirestore(app);