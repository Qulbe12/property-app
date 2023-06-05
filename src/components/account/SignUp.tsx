import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {createUserWithEmailAndPassword, PhoneAuthProvider} from "firebase/auth"
import {auth} from "../../config/firebaseConf";
import * as yup from "yup";
import {useAppDispatch} from "../../redux/Store";
import {setPhone, setUser, setVerificationId} from "../../redux/account/AuthSlice";
import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";
import useAuth from "../../hooks/useAuth";


// const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2490535597271516~5927830202';

const schema = yup.object().shape({
    phone: yup.string().required("phone is required"),
    password: yup.string().required("password is required")
})

const SignUp = () => {
    const navigation = useNavigation()
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show)

    const dispatch = useAppDispatch()
    const recaptchaVerifier = useRef(null)
    const {firebaseConfig} = useAuth()

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        phone: "",
        password: ""
    })

    const signup = async () => {
        try {
            const res = await createUserWithEmailAndPassword(auth, `${form.phone}@firebase.com`, form.password)
            await dispatch(setPhone(form.phone))
            await dispatch(setUser(res.user))
            const phoneProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(
                form.phone,
                recaptchaVerifier.current
            );
            await dispatch(setVerificationId(verificationId))
            alert(
                'Verification code has been sent to your phone.',
            );
            if (res.user && verificationId) {
                navigation.navigate("OtpVerification" as never)
            }
            console.log("user", res.user)
            console.log("vID", verificationId)
        } catch (e) {
            console.log("error", e)
        }
    }

    const onSubmit = () => {
        schema
            .validate(form)
            .then(async () => {
                await signup()
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
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                    attemptInvisibleVerification
                />
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
                    <FormControl>
                        <FormControl.Label>Phone number</FormControl.Label>
                        <Input placeholder="+92**********" keyboardType="phone-pad" maxLength={13}
                               onChangeText={(v) => {
                                   setForm({...form, phone: v})
                               }}/>
                        <FormControl.ErrorMessage>{errors}</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" InputRightElement={
                            <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        } onChangeText={(v) => {
                            setForm({...form, password: v})
                        }}/>
                        <FormControl.ErrorMessage>{errors}</FormControl.ErrorMessage>
                    </FormControl>
                    <Button onPress={signup} rounded="md" mt="2" color="primary.50">
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
        </Center>
    );
};

export default SignUp;
