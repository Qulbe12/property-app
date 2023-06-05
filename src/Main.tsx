import React from 'react';
import AuthStack from "./stacks/Authstack";
import useAuth from "./hooks/useAuth"
import Home from "./components/dashboard/Home";
import firebase from "firebase/compat";
import {Button} from "native-base";
import HomePage from "./components/dashboard/Home";

const Main = () => {
    const {user, firebaseConfig} = useAuth()

    if (firebaseConfig){
        firebase.initializeApp(firebaseConfig)
        console.log("firebase config done")
        console.log("main app",user)
    }
    return (
      user ? <HomePage/>  : <AuthStack/>
    );
};

export default Main;


