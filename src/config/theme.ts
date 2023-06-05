import {extendTheme} from 'native-base';
import {DefaultTheme} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  StorageManager, ColorMode } from 'native-base';
export const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#6366f1",
    },
};

export const nbtheme = extendTheme({
    colors: {
        defaultGradient: {
            from: "#4A28A1 22.03%",
            to: "#8538B2 53.2%",
            deg: 239.28,
        },
        primary: {
            50: "#fff4e6",
            100: "#ffe8cc",
            200: "#ffc9c9",
            300: "#ffc078",
            400: "#ffa94d",
            500: "#ff922b",
            600: "#fd7e14",
            700: "#f76707",
            800: "#e8590c",
            900: "#d9480f",
        },
    },
    config: {
        initialColorMode: "light",
    },
    components: {
        Input: {
            baseStyle: {
                rounded: "md",
            },
            defaultProps: {
                size: "md",
                variant:"outline"
            },
        },
        Text: {
            defaultProps: {
                color: "gray.700",
            },
        },
    },
});
//
// export const colorModeManager: StorageManager = {
//     get: async () => {
//         try {
//             let val = await AsyncStorage.getItem('@color-mode');
//             return val === 'dark' ? 'dark' : 'light';
//         } catch (e) {
//             return 'light';
//         }
//     },
//     set: async (value: ColorMode) => {
//         try {
//             await AsyncStorage.setItem('@color-mode', value as never);
//         } catch (e) {
//             console.log(e);
//         }
//     },
// };