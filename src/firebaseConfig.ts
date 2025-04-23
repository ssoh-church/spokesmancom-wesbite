// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBoFqnJOAEdb17lDzWP18PrvZ7OGyM_-M8",
    authDomain: "spokesmancom-f4441.firebaseapp.com",
    projectId: "spokesmancom-f4441",
    storageBucket: "spokesmancom-f4441.appspot.com",
    messagingSenderId: "1000950958298",
    appId: "1:1000950958298:web:c1439cfab55e0ba110fde3",
    measurementId: "G-FFRECCMGMJ"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
