import Main from "./src/Main";
import {NavigationContainer} from "@react-navigation/native";
import {NativeBaseProvider} from "native-base";
import {nbtheme} from "./src/config/theme";
import {Provider} from "react-redux";
import store from "./src/redux/Store";

export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={nbtheme}>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
