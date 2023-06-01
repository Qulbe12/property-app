import React from 'react';
import AuthStack from "./stacks/Authstack";
import useAuth from "./hooks/useAuth"
import {Button, Center} from "native-base";
import {signOut} from "firebase/auth"
import {auth} from "./config/firebaseConf";

const Main = () => {
    const {user} = useAuth()
    return (
      user ? <Center safeArea={true}>
          <Button onPress={async ()=>{
          const res = await signOut(auth)
          console.log(
              res
          )
      }}>sign out</Button></Center> : <AuthStack/>
    );
};

export default Main;


