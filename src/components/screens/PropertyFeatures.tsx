import React, {useState} from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, ScrollView, Switch, Text, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";

const PropertyFeatures = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation()
    return (
        <ScrollView>
            <Center flex={1} w="100%">
                <Box safeArea py="1" w="100%" maxW="323">
                    <Heading>Features</Heading>
                    <FormControl>
                        <FormControl.Label>Road size</FormControl.Label>
                        <Input keyboardType="name-phone-pad"/>
                    </FormControl>
                    <VStack my={4}>
                        <HStack justifyContent="space-between">
                            <Text>Electricity</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Cable Tv</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Carpet Road</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Cleanliness</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Internet</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Security</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Furnished</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Gas</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Security Changes</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <Text>Sewerage</Text>
                            <Switch offThumbColor="black"/>
                        </HStack>
                        <HStack justifyContent="space-between">
                            <FormControl w="46%">
                                <FormControl.Label>Garage Size</FormControl.Label>
                                <Input keyboardType="number-pad"/>
                            </FormControl>
                            <FormControl w="46%">
                                <FormControl.Label>Garage Capacity</FormControl.Label>
                                <Input keyboardType="number-pad"/>
                            </FormControl>
                        </HStack>
                    </VStack>
                    <Button onPress={() => {
                        navigation.navigate("finalize" as never)
                    }} alignSelf="center" w="50%">Next</Button>
                </Box>
            </Center>
        </ScrollView>
    );
};

export default PropertyFeatures;