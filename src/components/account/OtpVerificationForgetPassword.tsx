import React, {useEffect, useState} from 'react';
import {Box, Button, Center, FormControl, HStack, Image, Input, Link, VStack} from "native-base";
import * as yup from "yup";
import {useNavigation, useRoute} from "@react-navigation/native";
import {PhoneAuthProvider, signInWithCredential, updatePassword} from 'firebase/auth';
import {auth} from '../../config/firebaseConf';

const schema = yup.object().shape({
    phone: yup.string().required("phone is required"),
    otp: yup.string().required("OTP is required")
})
const OtpVerification = () => {
    const route = useRoute()
    const {creds}: any = route.params
    const navigation = useNavigation()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        phone: creds.phone,
        otp: ""
    })

    const completeSignUp = async () => {
        if (creds) {
            const credential = PhoneAuthProvider.credential(creds.id, form.otp)
            signInWithCredential(auth, credential)
                .then((result) => {
                    updatePassword(result.user, creds.password)
                        .then(() => {

                        })
                        .catch((reason) => {
                        })
                })
        }
    }


    const onSubmit = () => {
        schema
            .validate(form)
            .then(() => {
                completeSignUp()
                console.log(form)
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
                <Image size="2xl" source={require("../../../assets/otp.png")} alt={"image"}/>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>OTP</FormControl.Label>
                        <Input maxLength={6} keyboardType="phone-pad" placeholder="123456" onChangeText={(v) => {
                            setForm({...form, otp: v})
                        }}/>
                        <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
                    </FormControl>
                    <Button onPress={onSubmit} rounded="md" mt="2" color="primary.50">
                        Verify
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Link onPress={() => {
                            navigation.navigate("SignUp" as never)
                        }} _text={{
                            color: "primary.600",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}>
                            Back to login
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default OtpVerification;
