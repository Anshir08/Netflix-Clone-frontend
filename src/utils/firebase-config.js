import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7peWJeynqWOfzwbC5Ri0zhKwuEZWiz6k",
  authDomain: "netflix-clone-63d28.firebaseapp.com",
  projectId: "netflix-clone-63d28",
  storageBucket: "netflix-clone-63d28.appspot.com",
  messagingSenderId: "345233821825",
  appId: "1:345233821825:web:842457398b331119d33d80",
  measurementId: "G-WMZPDERJML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);