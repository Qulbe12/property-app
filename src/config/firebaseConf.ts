// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics, isSupported} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxUxPUYUXHN2gho0iT1UMgCeX9ESMY-2Q",

    authDomain: "real-estate-app-442ee.firebaseapp.com",

    databaseURL: "https://real-estate-app-442ee-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "real-estate-app-442ee",

    storageBucket: "real-estate-app-442ee.appspot.com",

    messagingSenderId: "805463148345",

    appId: "1:805463148345:web:14371832d05c5034e50ae8",

    measurementId: "G-YYG74YY16H"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export default app