// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATpotTpxj6830iN_JvzjquaXN0PnL9KdM",
  authDomain: "irheo-demo.firebaseapp.com",
  projectId: "irheo-demo",
  storageBucket: "irheo-demo.appspot.com",
  messagingSenderId: "80176653254",
  appId: "1:80176653254:web:a1efe5826b40389a74c8c7",
  measurementId: "G-4DZGQ19YRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, analytics, auth };