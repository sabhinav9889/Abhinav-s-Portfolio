// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4GIQZte_Ez9tApFNqjUNjkjzjj-bEFVo",
  authDomain: "portfolio-67bea.firebaseapp.com",
  projectId: "portfolio-67bea",
  storageBucket: "portfolio-67bea.appspot.com",
  messagingSenderId: "100133091212",
  appId: "1:100133091212:web:553cb0ef284a6f976a08a9",
  measurementId: "G-NQDEYWS5VS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);