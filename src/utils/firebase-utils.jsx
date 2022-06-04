// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHPBRCqmeradwKjRBubSGXJbA6KE19-uo",
  authDomain: "e-commerce-shop-db-e99e7.firebaseapp.com",
  projectId: "e-commerce-shop-db-e99e7",
  storageBucket: "e-commerce-shop-db-e99e7.appspot.com",
  messagingSenderId: "457430714952",
  appId: "1:457430714952:web:549c667e3e7dcfcfd7a67d",
  measurementId: "G-YSPTQ329F9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
