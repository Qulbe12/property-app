import React, {useState} from 'react';
import {
    Box,
    Button,
    Card,
    Center,
    CheckIcon,
    Divider,
    FlatList,
    FormControl,
    Heading,
    HStack,
    Icon,
    Input,
    Select,
    Text,
    VStack,
    WarningOutlineIcon
} from "native-base";
import {useNavigation} from "@react-navigation/native";

interface FormValues {
    [key: string]: string;
}

const PropertyFloorPlan = () => {
    const navigation = useNavigation()
    const [numForms, setNumForms] = useState<number>(0);
    const [formValues, setFormValues] = useState<FormValues[]>([]);
    const handleNumFormsChange = (value: string) => {
        const parsedValue = parseInt(value, 10);
        setNumForms(parsedValue);
        setFormValues(Array(parsedValue).fill({}));
    };

    const handleFormValueChange = (index: number, key: string, value: string) => {
        const updatedFormValues = [...formValues];
        updatedFormValues[index][key] = value;
        setFormValues(updatedFormValues);
    };


    return (
        <Center flex={1} w="100%">
            <Box safeArea py="8" w="100%" maxW="290">
                <Heading>Floor plan</Heading>
                <FormControl w="100%" maxW="300" isRequired isInvalid>
                    <FormControl.Label>Slect floors</FormControl.Label>
                    <Select minWidth="200" accessibilityLabel="floors" placeholder="Floors"
                            onValueChange={handleNumFormsChange}
                            selectedValue={numForms.toString()}
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size={5}/>
                            }} mt="1">
                        <Select.Item label="1" value="1"/>
                        <Select.Item label="2" value="2"/>
                        <Select.Item label="3" value="3"/>

                    </Select>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                        Please make a selection!
                    </FormControl.ErrorMessage>
                </FormControl>
                <FlatList scrollEnabled horizontal data={formValues} renderItem={({item}) => {
                    return (
                        <Card my={22} bg="contrastThreshold" w={305}>
                            <HStack w="100%" color="white" space={3} divider={<Divider/>}>
                                <VStack justifyContent="space-between" w="29%">
                                    <Text bold>Floor</Text>
                                    <Icon name="arrow-forward"/>
                                    <VStack space={9}>
                                        <Text>Bedrooms</Text>
                                        <Text>Washrooms</Text>
                                        <Text>Kitchen</Text>
                                        <Text>Terrace</Text>
                                    </VStack>
                                </VStack>
                                <VStack justifyContent="space-between" w="30%">
                                    <Text bold>Number</Text>
                                    <Icon name="arrow-forward"/>
                                    <VStack space={2}>
                                        <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                        <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                        <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                        <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                    </VStack>
                                </VStack>
                                <VStack justifyContent="space-between" w="30%">
                                    <Text bold>Area</Text>
                                    <Icon name="arrow-forward"/>
                                    <VStack space={2}>
                                        <Input maxLength={3} keyboardType="number-pad" w="80%"/>
                                        <Input maxLength={3} keyboardType="number-pad" w="80%"/>
                                        <Input maxLength={3} keyboardType="number-pad" w="80%"/>
                                        <Input maxLength={3} keyboardType="number-pad" w="80%"/>
                                    </VStack>
                                </VStack>
                            </HStack>
                        </Card>
                    )
                }}/>
                <Button onPress={() => {
                    navigation.navigate("propertyFeatures" as never)
                }} alignSelf="center" w="50%">Next</Button>
            </Box>
        </Center>
    );
};

export default PropertyFloorPlan;