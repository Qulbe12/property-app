import React from 'react';
import {Center, Image} from "native-base";

const WelcomeScreen = () => {
    return (
        <Center>
            <Image alt={"pic"} source={require("../../../assets/welcome.png")} size="2xl"/>
        </Center>
    );
};

export default WelcomeScreen;