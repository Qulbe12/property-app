import React from 'react';
import {Box, Center, HStack, Input, ScrollView, Text, VStack,} from "native-base";

const ContactList = () => {
    const contacts = [
        {
            name: "usman",
            phone: "03********"
        }
        , {
            name: "usman",
            phone: "03********"
        }
        , {
            name: "usman",
            phone: "03********"
        }
        , {
            name: "usman",
            phone: "03********"
        }
        , {
            name: "usman",
            phone: "03********"
        },
    ]
    return (
        <ScrollView>
            <VStack py={10} flex={1}>
                <Center>
                    <Box>
                        <Input placeholder="Search" w="60%" borderRadius="full" px="2" borderColor="orange.600"></Input>
                    </Box>
                </Center>
                <VStack py={10} flex={1} space={4}>
                    {contacts.map((c) => {
                        return (
                            <HStack flex={1} space={5}>
                                <Box bg="orange.600" h="90%" borderRadius="full" w="17%" justifyContent="center" mt={1}
                                     left={2}>
                                    <Center>
                                        <Text fontSize="xl" fontWeight="bold" color="white">AK</Text>
                                    </Center>
                                </Box>
                                <VStack h="47" w="30%" justifyContent="center" my={3}>
                                    <Text w="100%" fontSize="xl">{c.name}</Text>
                                    <Text fontWeight="hairline" fontSize="md" color="gray.900">{c.phone}</Text>
                                </VStack>
                            </HStack>
                        )
                    })}
                </VStack>

            </VStack>
        </ScrollView>

    );
};

export default ContactList;