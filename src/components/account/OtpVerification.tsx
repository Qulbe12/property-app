import React, {useEffect, useState} from 'react';
import {Box, Button, Center, FormControl, HStack, Image, Input, Link, VStack} from "native-base";
import * as yup from "yup";
import {useNavigation} from "@react-navigation/native";

const schema = yup.object().shape({
    phone: yup.string().required("phone is required"),
    otp: yup.string().required("OTP is required")
})
const OtpVerification = () => {
    const navigation = useNavigation()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        phone: "",
        otp: ""
    })
    const onSubmit = () => {
        schema
            .validate(form)
            .then(async () => {
                // navigation.navigate("OtpVerification" as never);
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
                        <FormControl.Label>Phone number</FormControl.Label>
                        <Input keyboardType="number-pad" onChangeText={(v) => {
                            setForm({...form, phone: v})
                        }}/>
                        <FormControl.ErrorMessage>{errors.phone}</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>OTP</FormControl.Label>
                        <Input type="password" onChangeText={(v) => {
                            setForm({...form, otp: v})
                        }}/>
                        <Button onPress={onSubmit} rounded="md" mt="2" color="primary.50">
                            Resend
                        </Button>
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
