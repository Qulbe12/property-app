import AsyncStorage from "@react-native-async-storage/async-storage";
import {Store} from "../interfaces/enums";


export const setToken = async (value:string) => {
    try {
        await AsyncStorage.setItem(Store.token, value);
    } catch (e) {
        console.log(e)
    }
};

export const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem(Store.token);
        if (value !== null) {
            // value previously stored
        }
        return value
    } catch (e) {
        console.log(e)
    }
};