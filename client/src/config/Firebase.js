// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrDxsX98WpfcHbB24KK3DMeV1kzdN0vUs",
    authDomain: "trend-trovee.firebaseapp.com",
    projectId: "trend-trovee",
    storageBucket: "trend-trovee.appspot.com",
    messagingSenderId: "982085065194",
    appId: "1:982085065194:web:941c60a24b260a0ad5fa93",
    measurementId: "G-BJX4PCMPWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, firestore, storage }