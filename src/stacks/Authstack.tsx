import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import SignIn from "../account/SignIn";
import signUp from "../account/SignUp";
import OtpVerification from "../account/OtpVerification";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn}/>
            <Stack.Screen options={{headerShown: false}} name="SignUp" component={signUp}/>
            <Stack.Screen
                name="OtpVerification"
                options={{
                    title: "OTP Verification",
                }}
                component={OtpVerification}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
