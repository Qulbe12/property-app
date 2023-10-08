import React, {useEffect, useRef, useState} from 'react';
import {
    Box,
    Button,
    Center,
    FormControl,
    Heading,
    HStack,
    Input,
    Link,
    Pressable,
    Text,
    useToast,
    VStack
} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {fetchSignInMethodsForEmail, PhoneAuthProvider} from "firebase/auth"
import {auth} from "../../config/firebaseConf";
import * as yup from "yup";
import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";
import useAuth from "../../hooks/useAuth";


// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2490535597271516~5927830202';

const schema = yup.object().shape({
    phone: yup.string().required("phone is required"),
    password: yup.string().required("password is required")
})

const SignUp = () => {
    const navigation = useNavigation()
    const toast = useToast()
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show)
    const recaptchaVerifier = useRef(null)
    const {firebaseConfig} = useAuth()
    const [message, showMessage] = useState({text: ""})
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        phone: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const checkPhoneNumberExists = async () => {
        try {
            const signInMethods = await fetchSignInMethodsForEmail(auth, `${form.phone}@mail.com`);
            return signInMethods.length > 0;
        } catch (error) {
            console.log('Error checking phone number:', error);
            return false;
        }
    };

    const signup = async () => {
        try {
            setLoading(true)
            const phoneProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(
                form.phone,
                recaptchaVerifier.current
            );
            showMessage({text: "Verification code has been sent to your phone."})
            setLoading(false)
            if (verificationId) {
                navigation.navigate("OtpVerification" as never, {
                    creds: {
                        password: form.password,
                        phone: form.phone,
                        id: verificationId
                    }
                } as never)
            } else {
                return null
            }

        } catch (e) {
            console.log("error", e)
            toast.show({
                title: "Error",
                description: "Something went wrong please try again"
            })
            showMessage({text: `Error: ${e}`})
            setLoading(false)
        }
    }

    const onSubmit = () => {
        schema
            .validate(form)
            .then(async () => {
                const phoneNumberExists = await checkPhoneNumberExists();
                if (phoneNumberExists) {
                    toast.show({
                        title: "Error",
                        description: "Phone number already exists"
                    })
                    setForm({phone: "", password: ""})
                    return
                } else {
                    signup()
                }
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
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                // attemptInvisibleVerification
            />
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Sign up here
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl isInvalid>
                        <FormControl.Label>Phone number</FormControl.Label>
                        <Input placeholder="+92**********" keyboardType="name-phone-pad" maxLength={13}
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
                    <Button isLoading={loading} onPress={onSubmit} rounded="md" mt="2" color="primary.50">
                        Sign up
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            already have an account?.{" "}
                        </Text>
                        <Link onPress={() => {
                            navigation.navigate("SignIn" as never)
                        }} _text={{
                            color: "primary.600",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}>
                            Sign In
                        </Link>
                    </HStack>
                </VStack>
            </Box>
            {message ? (
                <Pressable
                    justifyContent="center"
                    justifyItems="center"
                    onPress={() => showMessage({text: ""})}>
                    <Text
                        style={{
                            fontSize: 17,
                            textAlign: 'center',
                            margin: 20,
                        }}>
                        {message.text
                        }
                    </Text>
                </Pressable>
            ) : undefined}
        </Center>
    );
};

export default SignUp;
