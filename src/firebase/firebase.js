import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAOsEuuOz8UUn4-m1AaCqV1DzytlT2zkEQ",
  authDomain: "insta-clone-64a7b.firebaseapp.com",
  projectId: "insta-clone-64a7b",
  storageBucket: "insta-clone-64a7b.appspot.com",
  messagingSenderId: "219172260369",
  appId: "1:219172260369:web:211b4ec779c19c010d3fb0",
  measurementId: "G-KJWWCEKER9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };