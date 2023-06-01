import React, {useEffect, useState} from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {signInWithEmailAndPassword} from "firebase/auth"
import * as yup from "yup"
import {auth} from "../../config/firebaseConf";

const schema = yup.object().shape({
    phone: yup.string().required("phone is required"),
    password: yup.string().required("password is required")
})

const SignIn = () => {
    const navigation = useNavigation()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        phone: "",
        password: ""
    })

    const signInFunc = async ()=>{
try {
    const res = await signInWithEmailAndPassword(auth , form.phone , form.password )
    console.log(res.user)
}catch (e) {
    console.log(e)
}
    }

    const onSubmit = () => {
        schema
            .validate(form)
            .then(async () => {
              await  signInFunc()
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
                    <Button onPress={onSubmit} rounded="md" mt="2" color="primary.50">
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
