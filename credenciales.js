// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-v-84iPSE4s0JfTld0hHcq1723aSVqnY",
  authDomain: "lab04-pe.firebaseapp.com",
  projectId: "lab04-pe",
  storageBucket: "lab04-pe.appspot.com",
  messagingSenderId: "758101170049",
  appId: "1:758101170049:web:5c34444445cc79190e3a80"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase