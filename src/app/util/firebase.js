import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { isSupported, getAnalytics } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyCJPkpN__JOlnZup74pBKfe9RL37ieG9B8",
  authDomain: "xbrainstewx.firebaseapp.com",
  projectId: "xbrainstewx",
  storageBucket: "xbrainstewx.appspot.com",
  messagingSenderId: "770515421710",
  appId: "1:770515421710:web:86b7fff216d91942064a5f",
  measurementId: "G-73PTWKTDQ2"
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  }
}).catch((error) => {
  console.log("Analytics not supported: ", error);
});

export { db };
