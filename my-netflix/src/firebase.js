import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHaPZBY5cHDj-4yFLe23u60JEkY-uMNjI",
  authDomain: "netf-4810c.firebaseapp.com",
  projectId: "netf-4810c",
  storageBucket: "netf-4810c.firebasestorage.app",
  messagingSenderId: "316552035864",
  appId: "1:316552035864:web:b6308cfbb0f14914010d6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Google Provider
export const provider = new GoogleAuthProvider();