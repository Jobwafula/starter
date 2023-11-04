// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu0ImsghR3WZExdPStMXyoq3un3H7aCVE",
  authDomain: "start-up-f842e.firebaseapp.com",
  projectId: "start-up-f842e",
  storageBucket: "start-up-f842e.appspot.com",
  messagingSenderId: "197470042989",
  appId: "1:197470042989:web:cebf8a34c969b3baa23864",
  measurementId: "G-99T6YGTGB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;