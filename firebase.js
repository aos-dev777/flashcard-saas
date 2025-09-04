// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA97OLjZsypsy8RO-W2Y5e8fjOAsBmUQs",
  authDomain: "flashcardsaas-4364c.firebaseapp.com",
  projectId: "flashcardsaas-4364c",
  storageBucket: "flashcardsaas-4364c.firebasestorage.app",
  messagingSenderId: "390837824325",
  appId: "1:390837824325:web:2494753df3515deea72c2c",
  measurementId: "G-P72PP5P4XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);