import React, {useState} from 'react';
import {
    Box,
    Button,
    Center,
    CheckIcon,
    Divider,
    FormControl,
    Heading,
    HStack,
    Icon,
    Input,
    ScrollView,
    Select,
    Text,
    VStack,
    WarningOutlineIcon
} from "native-base";

interface floorsItems {

}

const PropertyFeatures = () => {

    const [floors, setFloors] = useState("")
    const [selectedFloors, setSelectedFloors] = useState<number[]>([])

    const setArr = (value: number) => {
        if (selectedFloors.length < value) {
            setSelectedFloors([...selectedFloors, value])
        } else {
            return
        }
        setArr(value)
    }

    return (
        <Center flex={1} w="100%">
            <Box safeArea py="8" w="100%" maxW="290">
                <Heading>Floor plan</Heading>
                <FormControl w="100%" maxW="300" isRequired isInvalid>
                    <FormControl.Label>Slect floors</FormControl.Label>
                    <Select minWidth="200" accessibilityLabel="floors" placeholder="Floors"
                            onValueChange={(itemValue) => {
                                setFloors(itemValue)
                                setArr(Number(itemValue))
                                console.log(selectedFloors)
                            }}
                            selectedValue={floors}
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size={5}/>
                            }} mt="1">
                        <Select.Item label="1" value="1"/>
                        <Select.Item label="2" value="2"/>
                        <Select.Item label="3" value="3"/>

                    </Select>
                    {floors === "" && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                        Please make a selection!
                    </FormControl.ErrorMessage>}
                </FormControl>
                <ScrollView my={9} horizontal={true} w="100%" borderRadius="lg" borderWidth="1">
                    {selectedFloors?.map((x) => {
                        console.log(x)
                        return (
                            <Box p="5">
                                <HStack space={3} divider={<Divider/>}>
                                    <VStack justifyContent="space-between" w="34%">
                                        <Text bold>Floor</Text>
                                        <Icon name="arrow-forward"/>
                                        <VStack space={9}>
                                            <Text>Bedrooms</Text>
                                            <Text>Washrooms</Text>
                                            <Text>Kitchen</Text>
                                            <Text>Terrace</Text>
                                        </VStack>
                                    </VStack>
                                    <VStack justifyContent="space-between" w="25%">
                                        <Text bold>Number</Text>
                                        <Icon name="arrow-forward"/>
                                        <VStack space={2}>
                                            <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                            <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                            <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                            <Input maxLength={2} keyboardType="number-pad" w="80%"/>
                                        </VStack>
                                    </VStack>
                                    <VStack justifyContent="space-between" w="25%">
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
                            </Box>
                        )
                    })}

                </ScrollView>
                <Button alignSelf="center" w="50%">Next</Button>
            </Box>
        </Center>
    );
};

export default PropertyFeatures;