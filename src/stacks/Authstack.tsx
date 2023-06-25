import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import SignIn from "../components/account/SignIn";
import signUp from "../components/account/SignUp";
import OtpVerification from "../components/account/OtpVerification";
import CustomPhoneAuthScreen from "../components/screens/TestComponent";
import ForgotPassword from "../components/account/ForgotPassword";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen options={{headerShown: false}} name="test" component={CustomPhoneAuthScreen}/>
            <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn}/>
            <Stack.Screen options={{headerShown: false}} name="SignUp" component={signUp}/>
            <Stack.Screen options={{headerShown: false}} name="ForgotPassword" component={ForgotPassword}/>
            <Stack.Screen
                name="OtpVerification"
                options={{
                    title: "OTP Verification",
                }}
                component={OtpVerification}
            />
            <Stack.Screen
                name="OtpVerificationForgot"
                options={{
                    title: "OTP Verification",
                }}
                component={OtpVerification}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
