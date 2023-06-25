import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import CustomDrawerContent from "../components/CustomDrawerContent";
import React from 'react';
import Home from "../components/dashboard/Home";
import WelcomeScreen from "../components/screens/WelcomeScreen";
import {Divider, Pressable, VStack} from "native-base";
import AddProperty from "../components/screens/AddProperty";
import PropertyFeatures from "../components/screens/PropertyFeatures";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigation = () => {
    const navigation = useNavigation();

    return (
        <Drawer.Navigator
            initialRouteName="welcome"
            drawerContent={(): React.ReactElement => <CustomDrawerContent/>}
            screenOptions={({navigation}: any) => ({
                headerLeft: () => {
                    return (
                        <Pressable onPress={navigation.toggleDrawer}>
                            <VStack space={1} ml={4}>
                                <Divider w={"24px"} bgColor={"#CF4DCB"} borderRadius={5} h={"2px"}/>
                                <Divider w={"24px"} bgColor={"#CF4DCB"} borderRadius={5} h={"2px"}/>
                                <Divider w={"10px"} bgColor={"#CF4DCB"} borderRadius={5} h={"2px"}/>
                            </VStack>
                        </Pressable>
                    );
                },
            })}>
            <Drawer.Screen
                name="welcome"
                options={{
                    title: "welcome",
                    headerShown: false,
                }}
                component={WelcomeScreen}
            />
            <Drawer.Screen
                name="AddProperty"
                options={{
                    title: "Property",
                    headerShown: false,
                }}
                component={AddProperty}
            />

        </Drawer.Navigator>
    )
}

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                options={{headerShown: false, title: "Home"}}
                name="Home"
                component={DrawerNavigation}
            />
            <Stack.Screen
                options={{headerShown: false, title: "Profile"}}
                name="Profile"
                component={Home}
            />
            <Stack.Screen
                options={{headerShown: false, title: "Profile"}}
                name="floorPlan"
                component={PropertyFeatures}
            />
            {/*<Stack.Screen*/}
            {/*    options={{headerShown: false, title: "Profile"}}*/}
            {/*    name="AddProperty"*/}
            {/*    component={AddProperty}*/}
            {/*/>*/}
        </Stack.Navigator>
    );
};

export default MainStack;