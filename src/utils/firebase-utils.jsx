// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
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
console.log(auth);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// config the database firebase and do checklist either true or false
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // add user if the users does not exist in firebase database
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.massage);
    }
  }
  return userDocRef;
};
