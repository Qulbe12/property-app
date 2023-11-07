import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import CustomDrawerContent from "../components/CustomDrawerContent";
import React from 'react';
import Home from "../components/dashboard/Home";
import {Divider, Pressable, VStack} from "native-base";
import AddProperty from "../components/screens/AddProperty";
import PropertyFloorPlan from "../components/screens/PropertyFloorPlan";
import PropertyFeatures from "../components/screens/PropertyFeatures";
import PropertyForRent from "../components/screens/PropertyForRent";
import Results from "../components/screens/Results";
import Contact from "../components/screens/Contact";
import HomeInfo from "../components/screens/HomeInfo";
import ContactList from "../components/screens/ContactList";
import Finalize from "../components/screens/Finalize";
import {nbtheme} from "../config/theme";


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
                                <Divider w={"24px"} bgColor={nbtheme.colors.primary["600"]} borderRadius={5} h={"2px"}/>
                                <Divider w={"24px"} bgColor={nbtheme.colors.primary["600"]} borderRadius={5} h={"2px"}/>
                                <Divider w={"10px"} bgColor={nbtheme.colors.primary["600"]} borderRadius={5} h={"2px"}/>
                            </VStack>
                        </Pressable>
                    );
                },
            })}>
            <Drawer.Screen
                name="welcome"
                options={{
                    title: "welcome",
                    headerShown: true,
                }}
                component={Results}
            />
            <Drawer.Screen
                name="PropertyForRent"
                options={{
                    title: "Properties",
                    headerShown: true,
                }}
                component={PropertyForRent}
            />
            <Drawer.Screen
                name="ContactList"
                options={{
                    title: "ContactList",
                    headerShown: true,
                }}
                component={ContactList}
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
                options={{title: "Profile"}}
                name="Profile"
                component={Home}
            />
            <Stack.Screen
                options={{headerShown: true, title: "Floor Plan"}}
                name="floorPlan"
                component={PropertyFloorPlan}
            />
            <Stack.Screen
                options={{headerShown: true, title: "Property Features"}}
                name="propertyFeatures"
                component={PropertyFeatures}
            />
            <Stack.Screen
                options={{headerShown: true, title: "Finalize"}}
                name="finalize"
                component={Finalize}
            />
            <Stack.Screen
                name="HomeInfo"
                options={{
                    title: "Property Information",
                    headerShown: true,
                }}
                component={HomeInfo}
            />
            <Stack.Screen
                name="Contact"
                options={{
                    title: "Contact",
                    headerShown: true,
                }}
                component={Contact}
            />
            <Stack.Screen
                name="AddProperty"
                options={{
                    title: "Property",
                    headerShown: true,
                }}
                component={AddProperty}
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
