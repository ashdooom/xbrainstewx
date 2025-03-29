// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJPkpN__JOlnZup74pBKfe9RL37ieG9B8",
  authDomain: "xbrainstewx.firebaseapp.com",
  projectId: "xbrainstewx",
  storageBucket: "xbrainstewx.appspot.com",
  messagingSenderId: "770515421710",
  appId: "1:770515421710:web:f56fda1a7f4ac426064a5f",
  measurementId: "G-CRSKTV3NEK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const analytics = getAnalytics(app);
