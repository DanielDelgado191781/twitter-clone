// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmehbavXBc-junxRIvrNk_I0MsfvOLvYE",
  authDomain: "twitter-clone-a2e68.firebaseapp.com",
  projectId: "twitter-clone-a2e68",
  storageBucket: "twitter-clone-a2e68.appspot.com",
  messagingSenderId: "510030611261",
  appId: "1:510030611261:web:cf532ca13f64565f64fb54"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };