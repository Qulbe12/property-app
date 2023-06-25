import {ColorMode, extendTheme, StorageManager} from 'native-base';
import {DefaultTheme} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#525252",
    },
};

export const nbtheme = extendTheme({
    colors: {
        primary: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
        },
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    },
    components: {
        Input: {
            baseStyle: {
                rounded: "md",
            },
            defaultProps: {
                size: "md",
                variant: "outline"
            },
        },
        Text: {
            defaultProps: {
                color: "gray.700",
            },
        },
    },
});

export const colorModeManager: StorageManager = {
    get: async () => {
        try {
            let val = await AsyncStorage.getItem('@color-mode');
            return val === 'dark' ? 'dark' : 'light';
        } catch (e) {
            return 'light';
        }
    },
    set: async (value: ColorMode) => {
        try {
            await AsyncStorage.setItem('@color-mode', value as never);
        } catch (e) {
            console.log(e);
        }
    },
};