// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getAnalytics, isSupported} from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyCufLORhpywMa_e-ovo2Yn0tnPxgZaHniY",

    authDomain: "dealer-app-43028.firebaseapp.com",

    projectId: "dealer-app-43028",

    storageBucket: "dealer-app-43028.appspot.com",

    messagingSenderId: "624151635976",

    appId: "1:624151635976:web:b568dd8ea3e99c40b6c9bd",

    measurementId: "G-BRE069X1NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export default app