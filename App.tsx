import Main from "./src/Main";
import {NavigationContainer} from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import {nbtheme} from "./src/config/theme";

export default function App() {
  return (
      <NavigationContainer>
        <NativeBaseProvider theme={nbtheme}>
   <Main/>
        </NativeBaseProvider>
      </NavigationContainer>
  );
}
