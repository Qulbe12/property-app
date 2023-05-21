import {extendTheme} from 'native-base';
import {DefaultTheme} from "@react-navigation/native";

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
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
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
                variant: "filled",
            },
        },
        Text: {
            defaultProps: {
                color: "gray.700",
            },
        },
    },
});