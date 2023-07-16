import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



export const firebaseConfig = {
  apiKey: "AIzaSyAwKsitVRYZEWThzh9lCenK5ShcEypO2QQ",
  authDomain: "shopping-93752.firebaseapp.com",
  projectId: "shopping-93752",
  storageBucket: "shopping-93752.appspot.com",
  messagingSenderId: "498209071298",
  appId: "1:498209071298:web:9e947dcacfac8dbdbe5b5b"
};


initializeApp(firebaseConfig);
export default db = getFirestore();