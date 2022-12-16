// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: "dog-c5738.firebaseapp.com",
  projectId: "dog-c5738",
  storageBucket: "dog-c5738.appspot.com",
  messagingSenderId: "863656551438",
  appId: "1:863656551438:web:1e4d893a340edff61f485f",
  measurementId: "G-9XD645HVP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);