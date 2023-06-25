import Main from "./src/Main";
import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider} from "native-base";
import {colorModeManager, navTheme, nbtheme} from "./src/config/theme";
import {Provider} from "react-redux";
import store from "./src/redux/Store";
import {useKeepAwake} from 'expo-keep-awake';
import {SafeAreaView} from "react-native-safe-area-context";


export default function App() {
    useKeepAwake()
    return (

        <NavigationContainer theme={navTheme}>
            <NativeBaseProvider theme={nbtheme} colorModeManager={colorModeManager}>
                <SafeAreaView style={{flex: 1}}>
                    <Provider store={store}>
                        <Main/>
                    </Provider>
                </SafeAreaView>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}