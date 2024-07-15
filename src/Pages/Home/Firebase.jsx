// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ContactMe from "./ContactMe";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq8G4OCOgJRrFpGK4YNnRglplgElNI0_4",
  authDomain: "my-protfolio-contect.firebaseapp.com",
  projectId: "my-protfolio-contect",
  storageBucket: "my-protfolio-contect.appspot.com",
  messagingSenderId: "246711651546",
  appId: "1:246711651546:web:e5cb47aa5a692b5fb1e9e3",
  measurementId: "G-GPZDE5TX89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);

export default ContactMe;