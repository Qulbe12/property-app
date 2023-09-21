import React from 'react';
import { Box, Center, Input, Text, VStack, Icon, IconButton, HStack, } from "native-base";

const ContactList = () => {
    return (
        <VStack space={4} py={7} flex={1}>
            <Center>
                <Box>
                    <Input placeholder="Search" w="60%" borderRadius="10" py="1" px="2" borderColor="orange.600"></Input>
                </Box>
            </Center>
            <VStack py={10}  >
                <HStack space={2}    >
                    <Box bg="pink.200" h="28%" borderRadius="50" w="15%" justifyContent="center"    >
                        <Center>
                            <Text>AK</Text>
                        </Center>
                    </Box>
                    <VStack>
                        <Text>Alex Kade</Text>
                        <Text>Available</Text>
                    </VStack>
                </HStack>
                <HStack>
                    <Box bg="pink.200" h="28%" borderRadius="50" w="15%" justifyContent="center">
                        <Center>
                            <Text>AK</Text>
                        </Center>
                    </Box>
                    <VStack>
                        <Text>Alex Kade</Text>
                        <Text>Available</Text>
                    </VStack>
                </HStack>
                <HStack>
                    <Box bg="pink.200" h="28%" borderRadius="50" w="15%" justifyContent="center">
                        <Center>
                            <Text>AK</Text>
                        </Center>
                    </Box>
                    <VStack>
                        <Text>Alex Kade</Text>
                        <Text>Available</Text>
                    </VStack>
                </HStack>
                <HStack>
                    <Box bg="pink.200" h="28%" borderRadius="50" w="15%" justifyContent="center">
                        <Center>
                            <Text>AK</Text>
                        </Center>
                    </Box>
                    <VStack>
                        <Text>Alex Kade</Text>
                        <Text>Available</Text>
                    </VStack>
                </HStack>
                <HStack>
                    <Box bg="pink.200" h="35%" borderRadius="50" w="15%" justifyContent="center">
                        <Center>
                            <Text>AK</Text>
                        </Center>
                    </Box>
                    <VStack>
                        <Text>Alex Kade</Text>
                        <Text>Available</Text>
                    </VStack>
                </HStack>
                <HStack>
                    <Box bg="pink.200" h="28%" borderRadius="50" w="15%" justifyContent="center">
                        <Center>
                            <Text>AK</Text>
                        </Center>
                    </Box>
                    <VStack>
                        <Text>Alex Kade</Text>
                        <Text>Available</Text>
                    </VStack>
                </HStack>

            </VStack>

        </VStack>
    );
};

export default ContactList;