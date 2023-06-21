
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDngklK-6A-MO3SeTvmuuLeYBumM3NpQk8",
    authDomain: "blufolio-project.firebaseapp.com",
    projectId: "blufolio-project",
    storageBucket: "blufolio-project.appspot.com",
    messagingSenderId: "654437577039",
    appId: "1:654437577039:web:8e6bd90715f05f58f7553a"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); 