import {useEffect, useState} from "react";
import { onAuthStateChanged, User} from "@firebase/auth"
import {auth} from "../config/firebaseConf";

const useAuth = () => {
    const [user, setUser] = useState<User>()

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
        user
    }
}

export default useAuth