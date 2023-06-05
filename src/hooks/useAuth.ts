import {useEffect, useState} from "react";
import { onAuthStateChanged, User } from "@firebase/auth"
import app, {auth} from "../config/firebaseConf";
import firebase from "firebase/compat";

const useAuth = () => {

    const [user, setUser] = useState<User>()
    const firebaseConfig = app ? app.options : undefined;
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(undefined)
            }
        })
        return unSubscribe
    }, [])

    return {
        user , firebaseConfig
    }
}

export default useAuth