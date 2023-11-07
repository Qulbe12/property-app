import React from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, VStack,} from "native-base";
import {useNavigation} from "@react-navigation/native";

const Finalize = () => {
    const navigation = useNavigation()
    return (
        <Center w="100%">
            <Box safeArea py="2" w="90%" maxW="290">
                <Heading>Finalize</Heading>
                <VStack space={3} my="5">
                    <FormControl>
                        <FormControl.Label>Locaton</FormControl.Label>
                        <Input placeholder="50m" borderColor="orange.600"></Input>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Address</FormControl.Label>
                        <Input placeholder="2" maxLength={11} borderColor="orange.600"></Input>
                    </FormControl>
                    <HStack w="45%" space="xl">
                        <FormControl>
                            <FormControl.Label>Demand </FormControl.Label>
                            <Input placeholder="Umer Usman" maxLength={11} borderColor="orange.600"></Input>
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Final Demand</FormControl.Label>
                            <Input placeholder="Umer Usman" maxLength={11} borderColor="orange.600"></Input>
                        </FormControl>
                    </HStack>
                    <HStack space="xl" py={1}>
                        <FormControl>
                            <FormControl.Label>Trade Condition</FormControl.Label>
                            <Input placeholder="type" keyboardType="default" h="20" borderColor="orange.600"></Input>
                        </FormControl>
                    </HStack>
                    <FormControl>
                        <FormControl.Label>Additional information</FormControl.Label>
                        <Input placeholder="type" keyboardType="default" h="20" borderColor="orange.600"></Input>
                    </FormControl>
                    <Button onPress={() => {
                        navigation.navigate("welcome" as never)
                    }} alignSelf="center" my={9} w="50%">Done</Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default Finalize;