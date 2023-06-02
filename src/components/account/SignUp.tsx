import React, {useEffect, useState} from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {createUserWithEmailAndPassword} from "firebase/auth"
import * as yup from 'yup'
import {auth} from "../../config/firebaseConf";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2490535597271516~5927830202';

const schema = yup.object().shape({
    phone: yup.string().required("phone is required"),
    password: yup.string().required("password is required")
})
const SignUp = () => {
    const navigation = useNavigation()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        phone: "",
        password: ""
    })

    const signup = async ()=>{
        try {
            const res =await createUserWithEmailAndPassword(auth , form.phone, form.password)
            console.log(res.user)
        }catch (e) {
            console.log(e)
        }
    }

    const onSubmit = () => {
        schema
            .validate(form)
            .then(async () => {

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
                        <Input keyboardType="number-pad" onChangeText={(v) => {
                            setForm({...form, phone: v})
                        }}/>
                        <FormControl.ErrorMessage>{errors.phone}</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" onChangeText={(v) => {
                            setForm({...form, password: v})
                        }}/>
                        <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
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
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
</Center>
    );
};

export default SignUp;
