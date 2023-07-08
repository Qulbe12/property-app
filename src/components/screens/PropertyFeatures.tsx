import React, {useState} from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, Switch, Text, VStack} from "native-base";

const PropertyFeatures = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Center flex={1} w="100%">
            <Box safeArea py="8" w="100%" maxW="290">
                <Heading>Features</Heading>
                <FormControl>
                    <FormControl.Label>Road size</FormControl.Label>
                    <Input keyboardType="number-pad"/>
                </FormControl>
                <VStack my={4}>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Electricity</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Cable Tv</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Carpet Road</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Cleanliness</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Internet</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Security</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Furnished</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Gas</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Security Changes</Text>
                        <Switch offThumbColor="black"/>
                    </HStack>
                    <HStack justifyContent="space-between">
                        <Text my={2}>Sewerage</Text>
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
                <Button alignSelf="center" w="50%">Next</Button>
            </Box>
        </Center>
    );
};

export default PropertyFeatures;