import {Avatar, Flex, HStack, Pressable, ScrollView, Stack, Text, VStack} from "native-base"
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import {nbtheme} from "../config/theme";

const CustomDrawerContent = () => {
    const navigation = useNavigation();
    const {user} = useAuth()

    return (
        <Flex height="full" justifyContent="space-between">
            <ScrollView my={12}>
                <VStack space={4}>
                    {/*<Image mt="16" ml="4" source={Image1} alt="image" />*/}
                    <VStack mt={2} mx={3}>
                        <Pressable onPress={(): void => navigation.navigate("welcome" as never)}>
                            <HStack top={1} p="3" space={3} alignItems="center">
                                <Ionicons name="compass-outline" size={24} color={nbtheme.colors.primary["600"]}/>
                                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>
                                    Dashboard
                                </Text>
                            </HStack>
                        </Pressable>
                    </VStack>
                </VStack>
                <VStack space={4}>
                    {/*<Image mt="16" ml="4" source={Image1} alt="image" />*/}
                    <VStack mt={2} mx={3}>

                        <Pressable onPress={(): void => navigation.navigate("PropertyForRent" as never)}>
                            <HStack top={1} p="3" space={3} alignItems="center">
                                <MaterialIcons name="house" size={24} color={nbtheme.colors.primary["600"]}/>
                                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>
                                    Properties
                                </Text>
                            </HStack>
                        </Pressable>
                    </VStack>
                </VStack>
                {/*<VStack space={4}>*/}
                {/*    /!*<Image mt="16" ml="4" source={Image1} alt="image" />*!/*/}
                {/*    <VStack mt={2} mx={3}>*/}
                {/*        <Pressable onPress={(): void => navigation.navigate("Results" as never)}>*/}
                {/*            <HStack top={1} p="3" space={3} alignItems="center">*/}
                {/*                <Foundation name="results" size={24} color={nbtheme.colors.primary["600"]}/>*/}
                {/*                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>*/}
                {/*                    Results*/}
                {/*                </Text>*/}
                {/*            </HStack>*/}
                {/*        </Pressable>*/}
                {/*    </VStack>*/}
                {/*</VStack>*/}
                {/*<VStack space={4}>*/}
                {/*    /!*<Image mt="16" ml="4" source={Image1} alt="image" />*!/*/}
                {/*    <VStack mt={2} mx={3}>*/}
                {/*        <Pressable onPress={(): void => navigation.navigate("Contact" as never)}>*/}
                {/*            <HStack top={1} p="3" space={3} alignItems="center">*/}
                {/*                <Ionicons name="call-outline" size={24} color={nbtheme.colors.primary["600"]}/>*/}
                {/*                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>*/}
                {/*                    Contact*/}
                {/*                </Text>*/}
                {/*            </HStack>*/}
                {/*        </Pressable>*/}
                {/*    </VStack>*/}
                {/*</VStack>*/}
                <VStack space={4}>
                    {/*<Image mt="16" ml="4" source={Image1} alt="image" />*/}
                    {/*<VStack mt={2} mx={3}>*/}
                    {/*    <Pressable onPress={(): void => navigation.navigate("HomeInfo" as never)}>*/}
                    {/*        <HStack top={1} p="3" space={3} alignItems="center">*/}
                    {/*            <MaterialIcons name="house" size={24} color={nbtheme.colors.primary["600"]}/>*/}
                    {/*            <Text color={nbtheme.colors.primary["600"]} fontSize={18}>*/}
                    {/*                House Information*/}
                    {/*            </Text>*/}
                    {/*        </HStack>*/}
                    {/*    </Pressable>*/}
                    {/*</VStack>*/}

                    <VStack mt={2} mx={3}>
                        <Pressable onPress={(): void => navigation.navigate("ContactList" as never)}>
                            <HStack top={1} p="3" space={3} alignItems="center">
                                <Ionicons name="compass-outline" size={24} color={nbtheme.colors.primary["600"]}/>
                                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>
                                    Contact List
                                </Text>
                            </HStack>
                        </Pressable>
                    </VStack>
                </VStack>
                {/*<VStack space={4}>*/}
                {/*    <VStack mt={2} mx={3}>*/}
                {/*        <Pressable onPress={(): void => navigation.navigate("Finalize" as never)}>*/}
                {/*            <HStack top={1} p="3" space={3} alignItems="center">*/}
                {/*                <Ionicons name="compass-outline" size={24} color={nbtheme.colors.primary["600"]}/>*/}
                {/*                <Text color={nbtheme.colors.primary["600"]} fontSize={18}>*/}
                {/*                    Finalize*/}
                {/*                </Text>*/}
                {/*            </HStack>*/}
                {/*        </Pressable>*/}
                {/*    </VStack>*/}
                {/*</VStack>*/}

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