import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "game-tracker-422ad.firebaseapp.com",
  projectId: "game-tracker-422ad",
  storageBucket: "game-tracker-422ad.appspot.com",
  messagingSenderId: "4258251921",
  appId: "1:4258251921:web:b7f39fd18493340d63ab30",
  measurementId: "G-06020LS42W"
};

const app = initializeApp(firebaseConfig);

