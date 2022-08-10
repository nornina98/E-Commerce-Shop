import { initializeApp } from "firebase/app";

//firebase auth and setup login / sign up provider
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

//firebase method to get data
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// config the database firebase and do checklist either true or false
export const db = getFirestore();

// fetch data from firebase db in collection and will use in context as central data.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "Categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // add user if the users does not exist in firebase database
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.massage);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // if email is not true or password not true so exit function.
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//for sign in with email and password as helper

export const signInAuthWithEmailAndPassword = async (email, password) => {
  // if email is not true or password not true so exit function.
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
