import React from 'react';
import {Button, Center, VStack} from "native-base";
import {signOut} from "firebase/auth";
import {auth} from "../../config/firebaseConf";
import {useAppDispatch, useAppSelector} from "../../redux/Store";
import {addUser} from "../../redux/account/actions/userActions";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {

    const dispatch = useAppDispatch()
    const {user} = useAuth()
    return (
        <Center flex={1} safeArea={true}>
            <VStack >
                <Button onPress={async () => {
                    const res = await signOut(auth)
                }}>sign out</Button>
                <Button onPress={() => {
                    dispatch(addUser({name: user?.displayName , phone: user?.phoneNumber}))
                }}>add user</Button>
            </VStack>
        </Center>
    );
};

export default HomePage;