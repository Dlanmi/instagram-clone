// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2gvD6yQsxWeh9-ENPQLf4Cx64J9pZFUA",
  authDomain: "insta-2-dfcf4.firebaseapp.com",
  projectId: "insta-2-dfcf4",
  storageBucket: "insta-2-dfcf4.appspot.com",
  messagingSenderId: "500167247149",
  appId: "1:500167247149:web:c19e51a503bb91578bbfa4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };