import React from 'react';
import AuthStack from "./stacks/Authstack";
import useAuth from "./hooks/useAuth"
import {Text} from "react-native";

const Main = () => {
    const {user} = useAuth()
    return (
        user ? <Text> not logged in</Text> : <AuthStack/>
    );
};

export default Main;


