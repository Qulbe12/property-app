import { Box, Center, HStack, Heading, VStack, Image, Text, Button, Badge } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const PropertyForRent = () => {
    return (
        <Center>
            <VStack safeArea py="1" w="100%" maxW="380" space={8}>
                <Box py="15" px="15" borderRadius={5} bg={["dark.600"]}>
                    <Badge borderRadius={4} alignSelf="flex-end" w='20' h='8' mx={-4} my={-4} colorScheme="warning" variant="solid"
                        _text={{
                            fontSize: "sm",
                            fontWeight: "bold",
                            color: "black",
                            letterSpacing: "sm"
                        }}
                    >Rent</Badge>
                    <HStack space={4}>
                        <Image borderRadius={10} alignSelf="center" alt={"House for Sale"} source={require("../../../assets/Picture.png")} size={"lg"} />
                        <VStack space={1} justifyContent="center">
                            <Heading fontSize="xs" fontWeight="extrabold">DHA Multan House NO.5</Heading>
                            <Text fontSize={8} fontWeight="semibold">Block 5 Street 10</Text>
                            <HStack justifyContent="space-between" w='80%'>
                                <HStack>
                                    <Ionicons name="ios-bed-outline" size={15} color="#ea580c" />
                                    <Text fontSize={8} fontWeight="normal">2 Bedrooms</Text>
                                </HStack>
                                <HStack>
                                    <FontAwesome name="home" size={15} color="#ea580c" />
                                    <Text fontSize={8} fontWeight="normal">3 Floors</Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize={8} fontWeight="normal" color="#ea580c">Rs</Text>
                                    <Text fontSize={8} fontWeight="extrabold">: 30k/</Text>
                                    <Text fontSize={8} fontWeight="normal" color="#ea580c">Month</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </Box>
                <Box py="15" px="15" borderRadius={10} bg={["dark.600"]}>
                    <Badge borderRadius={4} alignSelf="flex-end" w='20' h='8' mx={-4} my={-4} colorScheme="warning" variant="solid"
                        _text={{
                            fontSize: "sm",
                            fontWeight: "bold",
                            color: "black",
                            letterSpacing: "sm"
                        }}
                    >Sale</Badge>
                    <HStack space={4}>
                        <Image borderRadius={10} alignSelf="center" alt={"House for Sale"} source={require("../../../assets/Picture.png")} size={"lg"} />
                        <VStack space={1} justifyContent="center">
                            <Heading fontSize="xs" fontWeight="extrabold">DHA Multan House NO.5</Heading>
                            <Text fontSize={8} fontWeight="semibold">Block 5 Street 10</Text>
                            <HStack justifyContent="space-between" w='80%'>
                                <HStack>
                                    <Ionicons name="ios-bed-outline" size={15} color="#ea580c" />
                                    <Text fontSize={8} fontWeight="normal">2 Bedrooms</Text>
                                </HStack>
                                <HStack>
                                    <FontAwesome name="home" size={15} color="#ea580c" />
                                    <Text fontSize={8} fontWeight="normal">3 Floors</Text>
                                </HStack>
                                <HStack>
                                    <Text fontSize={8} fontWeight="normal" color="#ea580c">Rs</Text>
                                    <Text fontSize={8} fontWeight="extrabold">: 30</Text>
                                    <Text fontSize={8} fontWeight="normal" color="#ea580c">M</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </Box>
                <Center>
                    <Button w='40%' size="lg">ADD</Button>
                </Center>
            </VStack>
        </Center>
    );
};

export default PropertyForRent;
