// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDApMuxejnsB-_mzZCb57VY4wELiq1RD3Y",
  authDomain: "video-game-reviews-9c380.firebaseapp.com",
  projectId: "video-game-reviews-9c380",
  storageBucket: "video-game-reviews-9c380.appspot.com",
  messagingSenderId: "193675270163",
  appId: "1:193675270163:web:38221bf2617d88e43447e6",
  measurementId: "G-0E133NYNL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);