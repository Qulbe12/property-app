import React, {useEffect, useState} from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, useToast, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../config/firebaseConf";
import * as yup from "yup";
import {useAppDispatch} from '../../redux/Store';


const schema = yup.object().shape({
    phone: yup.string().required("phone is required"),
    password: yup.string().required("password is required")
})
const SignIn = () => {
    const navigation = useNavigation()
    const toast = useToast()
    const dispatch = useAppDispatch()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        phone: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show)
    const signInFunc = async () => {
        try {
            setLoading(true)
            const res = await signInWithEmailAndPassword(auth, `${form.phone}@mail.com`, form.password)
            setLoading(false)
        } catch (e: any) {
            toast.show({
                title: "Error",
                description: "Something went wrong please try again"
            })
            setLoading(false)
        }
    }

    const onSubmit = () => {
        schema
            .validate(form)
            .then(async () => {
                await signInFunc()
            })
            .catch((err: yup.ValidationError) => {
                if (!err.path) return;
                setErrors({[err.path]: err.message});
            });
    };

    useEffect(() => {
        setErrors({});
    }, [form]);


    return (
        <Center flex={1} w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Welcome
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl isInvalid>
                        <FormControl.Label>Phone number</FormControl.Label>
                        <Input placeholder="+92**********" keyboardType="phone-pad" maxLength={13}
                               onChangeText={(v) => {
                                   setForm({...form, phone: v})
                               }}/>
                        <FormControl.ErrorMessage>{errors.phone}</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type={show ? "text" : "password"} InputRightElement={
                            <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        } onChangeText={(v) => {
                            setForm({...form, password: v})
                        }}/>
                        <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                    </FormControl>
                    <HStack justifyContent="flex-end">
                        <Link onPress={() => {
                            navigation.navigate("ForgotPassword" as never)
                        }} _text={{
                            color: "primary.600",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}>
                            Forgot password?
                        </Link>
                    </HStack>
                    <Button isLoading={loading} onPress={onSubmit} rounded="md" mt="2" color="primary.50">
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            I'm a new user.{" "}
                        </Text>
                        <Link onPress={() => {
                            navigation.navigate("SignUp" as never)
                        }} _text={{
                            color: "primary.600",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default SignIn;
