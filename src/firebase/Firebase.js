// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ZZXMBreLxcqMBwD90-aP_2Ro0OTqZ-k",
  authDomain: "eventgame-b1314.firebaseapp.com",
  projectId: "eventgame-b1314",
  storageBucket: "eventgame-b1314.appspot.com",
  messagingSenderId: "709938468021",
  appId: "1:709938468021:web:130b483a1c7d0999755afc",
  measurementId: "G-F50SS6PG51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)