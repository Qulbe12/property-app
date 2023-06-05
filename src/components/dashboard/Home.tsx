import React from 'react';
import {Button, Center, VStack} from "native-base";
import {signOut} from "firebase/auth";
import {auth} from "../../config/firebaseConf";

const HomePage = () => {
    return (
        <Center flex={1} safeArea={true}>
            <VStack space="sx">
            <Button onPress={async ()=>{
                const res = await signOut(auth)
                console.log(
                    res
                )
            }}>sign out</Button>
            </VStack>
        </Center>
    );
};

export default HomePage;