import React from 'react';
import {
    Box,
    Button,
    Card,
    Center,
    Divider,
    Heading,
    HStack,
    Icon,
    Image,
    ScrollView,
    Switch,
    Text,
    VStack
} from "native-base";
import {Entypo, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const HomeInfo = () => {
    const navigation = useNavigation()
    return (
        <ScrollView mb={8}>
            <Image alt='House for sale/Rent' source={require("../../../assets/Picture.png")} size='2xl' w="100%"/>
            <Center py={1}>
                <Heading fontSize="md" fontWeight="bold">Entire Bromo mountain view Cabin in Surabaya</Heading>
            </Center>
            <HStack space={2} px={5} py={1}>
                <Image alt='Current Owner of Property' source={require("../../../assets/Client1.png")} size="10"
                       borderRadius="lg"/>
                <VStack>
                    <Text fontSize="xs" fontWeight="medium">Umar Usman</Text>
                    <Text fontSize={8} fontWeight="default">Property owner</Text>
                </VStack>
                <Button left="35%" borderRadius={8} onPress={() => {
                    navigation.navigate("Contact" as never)
                }}>contact</Button>
            </HStack>
            <Divider my={2}/>
            <Box px={5} py={2}>
                <Heading fontSize="md" fontWeight="bold" color="#ea580c">Home Facilities</Heading>
            </Box>
            <HStack w='100%' my={2} space={4}>
                <HStack w='50%' justifyContent="space-between">
                    <Text px={4} fontWeight="semibold">Electricity</Text>
                    <Switch offThumbColor="black"/>
                </HStack>
                <HStack w='50%' justifyContent="space-between">
                    <Text fontWeight="semibold">Internet</Text>
                    <Switch right={8} offThumbColor="black"/>
                </HStack>
            </HStack>
            <HStack w='100%' my={2} space={4}>
                <HStack w='50%' justifyContent="space-between">
                    <Text px={4} fontWeight="semibold">Gas</Text>
                    <Switch offThumbColor="black"/>
                </HStack>
                <HStack w='50%' justifyContent="space-between">
                    <Text fontWeight="semibold">Cable Tv</Text>
                    <Switch right={8} offThumbColor="black"/>
                </HStack>
            </HStack>
            <HStack w='100%' my={2} space={4}>
                <HStack w='50%' justifyContent="space-between">
                    <Text px={4} fontWeight="semibold">Cleanliness</Text>
                    <Switch offThumbColor="black"/>
                </HStack>
                <HStack w='50%' justifyContent="space-between">
                    <Text fontWeight="semibold">Security</Text>
                    <Switch right={8} offThumbColor="black"/>
                </HStack>
            </HStack>
            <HStack w='100%' my={2} space={4}>
                <HStack w='50%' justifyContent="space-between">
                    <Text px={4} fontWeight="semibold">Furnished</Text>
                    <Switch offThumbColor="black"/>
                </HStack>
                <HStack w='50%' justifyContent="space-between">
                    <Text fontWeight="semibold">Severge</Text>
                    <Switch right={8} offThumbColor="black"/>
                </HStack>
            </HStack>
            <HStack w='100%' my={2} space={4}>
                <HStack w='50%' justifyContent="space-between">
                    <Text px={4} fontWeight="semibold">Carpetroad</Text>
                    <Switch offThumbColor="black"/>
                </HStack>
                <HStack w='50%' justifyContent="space-between">
                    <Text fontWeight="semibold">Changed S</Text>
                    <Switch right={8} offThumbColor="black"/>
                </HStack>
            </HStack>
            <Box px={5} py={4}>
                <Heading fontSize="md" fontWeight="bold" color="#ea580c">Total Infrastructure</Heading>
            </Box>
            <Center>
                <HStack w='100%' my={2}>
                    <HStack w='50%' px={4} space={2}>
                        <Entypo name="location-pin" size={24} color="#ea580c"/>
                        <Text>DHA, Multan</Text>
                    </HStack>
                    <HStack w='50%' px={4} space={2}>
                        <Ionicons name="bed" size={24} color="#ea580c"/>
                        <Text>2 room</Text>
                    </HStack>
                </HStack>
                <HStack w='100%' my={2}>
                    <HStack w='50%' px={4} space={2}>
                        <MaterialCommunityIcons name="home-analytics" size={24} color="#ea580c"/>
                        <Text>874 m2</Text>
                    </HStack>
                    <HStack w='50%' px={4} space={2}>
                        <FontAwesome5 name="hands-wash" size={24} color="#ea580c"/>
                        <Text>2 Washroom</Text>
                    </HStack>
                </HStack>
                <HStack w='100%' my={2}>
                    <HStack w='50%' px={4} space={2}>
                        <MaterialIcons name="connected-tv" size={24} color="#ea580c"/>
                        <Text>Tv Lounge</Text>
                    </HStack>
                    <HStack w='50%' px={4} space={2}>
                        <MaterialCommunityIcons name="bed-single" size={24} color="#ea580c"/>
                        <Text>3 Terrace</Text>
                    </HStack>
                </HStack>
                <HStack w='100%' my={2}>
                    <HStack w='50%' px={4} space={2}>
                        <MaterialIcons name="kitchen" size={24} color="#ea580c"/>
                        <Text>2 Kitchen</Text>
                    </HStack>
                    <HStack w='50%' px={4} space={2}>
                        <Feather name="square" size={24} color="#ea580c"/>
                        <Text>Open Space</Text>
                    </HStack>
                </HStack>
            </Center>
            <Box px={5} py={4}>
                <Heading fontSize="md" fontWeight="bold" color="#ea580c">Floors</Heading>
            </Box>
            <Center>
                <Card my={2} bg="contrastThreshold" w="90%">
                    <HStack w="100%" color="white" space={3} divider={<Divider/>}>
                        <VStack justifyContent="space-between" w="32%">
                            <Text bold>Floor 1</Text>
                            <Icon name="arrow-forward"/>
                            <VStack space={9}>
                                <Text>Bedrooms</Text>
                                <Text>Washroom</Text>
                                <Text>Kitchen</Text>
                                <Text>Terrace</Text>
                            </VStack>
                        </VStack>
                        <VStack justifyContent="space-between" w="30%">
                            <Text bold>Number.</Text>
                            <Icon name="arrow-forward"/>
                            <VStack space={9}>
                                <Text>2</Text>
                                <Text>2</Text>
                                <Text>2</Text>
                                <Text>-</Text>
                            </VStack>
                        </VStack>
                        <VStack justifyContent="space-between" w="30%">
                            <Text bold>Area</Text>
                            <Icon name="arrow-forward"/>
                            <VStack space={9}>
                                <Text>44/20m</Text>
                                <Text>44/20m</Text>
                                <Text>44/20m</Text>
                                <Text>-</Text>
                            </VStack>
                        </VStack>
                    </HStack>
                </Card>
            </Center>
            <Box px={5} py={1}>
                <Heading py={1} fontSize="md" fontWeight="bold">About location’s neighborhood</Heading>
                <Text fontSize='xs' fontWeight='light'>
                    This cabin comes with Smart Home System
                    and beautiful viking style. You can see sunrise
                    in the morning with City View from full Glass
                    Window.

                    This unit is surrounded by business district of
                    West Surabaya that offers you the city life as
                    well as wide range of culinary.

                    This apartment equipped with Washing
                    Machine, Electric Stove, Microwave,
                    Refrigerator, Cutlery.</Text>
            </Box>
            <HStack justifyContent='space-around'>
                <VStack>
                    <HStack>
                        <Text fontWeight="bold">Rs.25000</Text>
                        <Text fontWeight="light">/ month</Text>
                    </HStack>
                    <Text underline>Payment estimation</Text>
                </VStack>
                <Button onPress={() => {
                    navigation.navigate("Contact" as never)
                }} borderRadius={10}>Contact</Button>
            </HStack>
        </ScrollView>
    );
};

export default HomeInfo;