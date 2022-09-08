// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0bZJWVUzp4iBbPI8NnwCYw7VuTfCdW28",
  authDomain: "healthsgo.firebaseapp.com",
  projectId: "healthsgo",
  storageBucket: "healthsgo.appspot.com",
  messagingSenderId: "489954306362",
  appId: "1:489954306362:web:8a85c11ebcae6a958a4803",
  measurementId: "G-1WZBZN1Q0J",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage };
