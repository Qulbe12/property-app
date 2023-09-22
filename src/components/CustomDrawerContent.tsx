import {Avatar, Flex, HStack, Pressable, ScrollView, Stack, Text, VStack} from "native-base"
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import {nbtheme} from "../config/theme";

const CustomDrawerContent = () => {
    const navigation = useNavigation();
    const {user} = useAuth()

    return (
        <Flex height="full" justifyContent="space-between">
            <ScrollView>
                <VStack space={4}>
                    {/*<Image mt="16" ml="4" source={Image1} alt="image" />*/}
                    <VStack mt={2} mx={3}>
                        <Pressable onPress={(): void => navigation.navigate("AddProperty" as never)}>
                            <HStack top={1} p="3" space={3} alignItems="center">
                                <Ionicons name="compass-outline" size={24} color={nbtheme.colors.primary["600"]}/>
                                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>
                                    Discover
                                </Text>
                            </HStack>
                        </Pressable>
                    </VStack>
                </VStack>
                <VStack space={4}>
                    {/*<Image mt="16" ml="4" source={Image1} alt="image" />*/}
                    <VStack mt={2} mx={3}>
                        <Pressable onPress={(): void => navigation.navigate("Finalize" as never)}>
                            <HStack top={1} p="3" space={3} alignItems="center">
                                <Ionicons name="compass-outline" size={24} color={nbtheme.colors.primary["600"]}/>
                                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>
                                    Finalize
                                </Text>
                            </HStack>
                        </Pressable>
                    </VStack>
                </VStack>
            </ScrollView>
            <Pressable onPress={(): void => navigation.navigate("Profile" as never)}>
                <Stack direction={"row"} py="6" justifyContent={"center"} bg="darkBlue.900" space={3}>
                    <Avatar
                        bg="indigo.500"
                        source={{
                            uri: user?.photoURL?.toString(),
                        }}
                    />

                    <Flex>
                        <Text fontWeight={400} color={"white"} fontSize={16}>
                            {user?.displayName}
                        </Text>
                        <Text fontWeight={300} fontSize={12} color={"#A3A3A3"}>
                            {user?.phoneNumber}
                        </Text>
                    </Flex>
                </Stack>
            </Pressable>
        </Flex>
    )
}
export default CustomDrawerContent