import React from 'react';
import useAuth from "./hooks/useAuth"
import ProfileSetup from "./components/account/ProfileSetup";
import MainStack from "./stacks/MainStack";
import AuthStack from "./stacks/Authstack";

const Main = () => {
    const {user, firebaseConfig} = useAuth()
    if (user) {
        if (user?.displayName === null) {

            return (
                <ProfileSetup/>
            )
        } else {
            return (
                <MainStack/>
            )
        }
    }
    return (
        <AuthStack/>
    );
};

export default Main;


