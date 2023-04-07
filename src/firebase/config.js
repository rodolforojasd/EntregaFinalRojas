// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWKWiEUDAVc_Ve8ri6dUp51NOvPJxNECs",
  authDomain: "ch-reactjs-25654.firebaseapp.com",
  projectId: "ch-reactjs-25654",
  storageBucket: "ch-reactjs-25654.appspot.com",
  messagingSenderId: "56930830704",
  appId: "1:56930830704:web:9508ef9427e653ebc6e7b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
