// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnrrrAjz2ZhxikVLApLHnv0rL3r7CuvT0",
  authDomain: "ibra-cave-tech-vue-refont-web.firebaseapp.com",
  projectId: "ibra-cave-tech-vue-refont-web",
  storageBucket: "ibra-cave-tech-vue-refont-web.firebasestorage.app",
  messagingSenderId: "980710631269",
  appId: "1:980710631269:web:54a1195b530feb712be38c",
  measurementId: "G-9DX7MG98Q3"
};

// Dans src/firebase.js
export const allowedEmails = [
  'ibralejorgo@gmail.com',
  'redacteur@cave-tech.com'
]

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

