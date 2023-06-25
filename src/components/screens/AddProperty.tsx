import React, {useEffect, useState} from 'react';
import {Box, Button, Center, FormControl, Heading, HStack, Input, useToast, VStack} from "native-base";
import * as yup from "yup";
import {useNavigation} from "@react-navigation/native";

const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    phone: yup.string().required("phone is required"),
    areaUnit: yup.string().required("area unit is required"),
    areaSize: yup.string().required("area size is required"),
    frontLenght: yup.string().required("front length is required"),
    sideLenght: yup.string().required("side length is required"),
})
const AddProperty = () => {
    const toast = useToast()
    const navigation = useNavigation()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [form, setForm] = useState({
        name: "",
        phone: "",
        areaUnit: "",
        areaSize: "",
        frontLenght: "",
        sideLenght: "",
        otherFeatures: ""
    })

    const handleNext = () => {
        navigation.navigate("floorPlan" as never)
        console.log(form)
    }

    const onSubmit = () => {
        schema
            .validate(form)
            .then(() => {
                handleNext()
            })
            .catch((err: yup.ValidationError) => {
                if (!err.path) return;
                setErrors({[err.path]: err.message});
                toast.show({
                    title: "please enter all fields except 'other features'"
                })
            });
    };

    useEffect(() => {
        setErrors({});
    }, [form]);


    return (
        <Center flex={1} w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading>General</Heading>
                <VStack space={3} my="5">
                    <FormControl isInvalid>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input placeholder="name" keyboardType="default"
                               onChangeText={(v) => {
                                   setForm({...form, name: v})
                               }}/>
                        <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
                    </FormControl>
                    <FormControl isInvalid>
                        <FormControl.Label>Number</FormControl.Label>
                        <Input placeholder="03*********" keyboardType="number-pad" maxLength={11}
                               onChangeText={(v) => {
                                   setForm({...form, phone: v})
                               }}/>
                        <FormControl.ErrorMessage>{errors.number}</FormControl.ErrorMessage>
                    </FormControl>
                    <HStack w="45%" space="xl">
                        <FormControl isInvalid>
                            <FormControl.Label>Area unit</FormControl.Label>
                            <Input placeholder="m/marla" keyboardType="number-pad" maxLength={11}
                                   onChangeText={(v) => {
                                       setForm({...form, areaUnit: v})
                                   }}/>
                            <FormControl.ErrorMessage>{errors.areaUnit}</FormControl.ErrorMessage>
                        </FormControl>
                        <FormControl isInvalid>
                            <FormControl.Label>Area size</FormControl.Label>
                            <Input placeholder="8000m" keyboardType="number-pad" maxLength={11}
                                   onChangeText={(v) => {
                                       setForm({...form, areaSize: v})
                                   }}/>
                            <FormControl.ErrorMessage>{errors.areaSize}</FormControl.ErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack w="45%" space="xl">
                        <FormControl isInvalid>
                            <FormControl.Label>Front length</FormControl.Label>
                            <Input placeholder="8000m" keyboardType="number-pad" maxLength={11}
                                   onChangeText={(v) => {
                                       setForm({...form, frontLenght: v})
                                   }}/>
                            <FormControl.ErrorMessage>{errors.frontLength}</FormControl.ErrorMessage>
                        </FormControl>
                        <FormControl isInvalid>
                            <FormControl.Label>Side length</FormControl.Label>
                            <Input placeholder="8000m" keyboardType="number-pad" maxLength={11}
                                   onChangeText={(v) => {
                                       setForm({...form, sideLenght: v})
                                   }}/>
                            <FormControl.ErrorMessage>{errors.sideLength}</FormControl.ErrorMessage>
                        </FormControl>
                    </HStack>
                    <FormControl>
                        <FormControl.Label>Other Features (optional)</FormControl.Label>
                        <Input placeholder="name" keyboardType="default"
                               onChangeText={(v) => {
                                   setForm({...form, otherFeatures: v})
                               }}/>
                    </FormControl>
                    <Button onPress={handleNext} alignSelf="center" my={9} w="50%">Next</Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default AddProperty;