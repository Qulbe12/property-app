import axios from "axios";
import {auth} from "./firebaseConf";

export const axiosPrivate = axios.create({
    baseURL: "http://192.168.1.10:8000/api/",
    headers: {
        Accept: "application/json",
    },
});


axiosPrivate.interceptors.request.use(
    async (config) => {
        const idToken = await auth.currentUser?.getIdToken(/* forceRefresh */ )
        if (idToken) {
            console.log("token in interceptor", idToken)
            config.headers.Authorization = `Bearer ${idToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
