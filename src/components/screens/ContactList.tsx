import React from 'react';
import { Box, Center, Input, Text, VStack, Icon, IconButton, HStack, Flex, ScrollView, } from "native-base";

const ContactList = () => {
    return (
        <ScrollView        >
            <VStack py={10} flex={1}>
                <Center>
                    <Box>
                        <Input placeholder="Search" w="60%" borderRadius="10" px="2" borderColor="orange.600"      ></Input>
                    </Box>
                </Center>
                <VStack py={10} flex={1} space={4}>
                    <HStack flex={1} space={5}   >
                        <Box bg="orange.600" h="90%" borderRadius="50" w="17%" justifyContent="center" mt={1} left={2}  >
                            <Center>
                                <Text fontSize="xl" fontWeight="bold" color="white">AK</Text>
                            </Center>
                        </Box>
                        <VStack h="47" w="20%" justifyContent="center" my={3}>
                            <Text fontSize="xl"     >Alex Kade</Text>
                            <Text fontSize="md" fontWeight="hairline" color="gray.900">03*********</Text>
                        </VStack>
                    </HStack>
                    <HStack flex={1} space={5}   >
                        <Box bg="orange.600" h="90%" borderRadius="50" w="17%" justifyContent="center" mt={1} left={2} >
                            <Center>
                                <Text fontSize="xl" fontWeight="bold" color="white">AK</Text>
                            </Center>
                        </Box>
                        <VStack h="47" w="20%" justifyContent="center" my={3}    >
                            <Text fontSize="xl"      >Alex Kade</Text>
                            <Text fontWeight="hairline" fontSize="md" color="gray.900">03*********</Text>
                        </VStack>
                    </HStack>
                    <HStack flex={1} space={5}  >
                        <Box bg="orange.600" h="90%" borderRadius="50" w="17%" justifyContent="center" mt={1} left={2}  >
                            <Center>
                                <Text fontSize="xl" fontWeight="bold" color="white">AK</Text>
                            </Center>
                        </Box>
                        <VStack h="47" w="20%" justifyContent="center" my={3}   >
                            <Text fontSize="xl"     >Alex Kade</Text>
                            <Text fontWeight="hairline" fontSize="md" color="gray.900">03*********</Text>
                        </VStack>
                    </HStack>
                    <HStack flex={1} space={5}  >
                        <Box bg="orange.600" h="90%" borderRadius="50" w="17%" justifyContent="center" mt={1} left={2}  >
                            <Center>
                                <Text fontSize="xl" fontWeight="bold" color="white">AK</Text>
                            </Center>
                        </Box>
                        <VStack h="47" w="20%" justifyContent="center" my={3}>
                            <Text fontSize="xl"     >Alex Kade</Text>
                            <Text fontWeight="hairline" fontSize="md" color="gray.900"       >03*********</Text>
                        </VStack>
                    </HStack>
                    <HStack flex={1} space={5}  >
                        <Box bg="orange.600" h="90%" borderRadius="50" w="17%" justifyContent="center" mt={1} left={2} >
                            <Center>
                                <Text fontSize="xl" fontWeight="bold" color="white">AK</Text>
                            </Center>
                        </Box>
                        <VStack h="47" w="20%" justifyContent="center" my={3}  >
                            <Text fontSize="xl"      >Alex Kade</Text>
                            <Text fontWeight="hairline" fontSize="md" color="gray.900">03*********</Text>
                        </VStack>
                    </HStack>
                    <HStack flex={1} space={5}  >
                        <Box bg="orange.600" h="90%" borderRadius="50" w="17%" justifyContent="center" mt={1} left={2} >
                            <Center>
                                <Text fontSize="xl" fontWeight="bold" color="white">AK</Text>
                            </Center>
                        </Box>
                        <VStack h="47" w="20%" justifyContent="center" my={3}    >
                            <Text fontSize="xl"    >Alex Kade</Text>
                            <Text fontWeight="hairline" fontSize="md" color="gray.900">03*********</Text>
                        </VStack>
                    </HStack>

                </VStack>

            </VStack>
        </ScrollView>

    );
};

export default ContactList;