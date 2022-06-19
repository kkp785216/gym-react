import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCF0j9PZFrDaanwxuAc4PuCDbs8o8eE868",
    authDomain: "fitness-gym-65c3e.firebaseapp.com",
    projectId: "fitness-gym-65c3e",
    storageBucket: "fitness-gym-65c3e.appspot.com",
    messagingSenderId: "514006794412",
    appId: "1:514006794412:web:9b5eddd8cc249127d55f09"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);