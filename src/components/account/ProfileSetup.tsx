import React, {useState} from 'react';
import * as yup from "yup";
import {Box, Button, Center, FormControl, Heading, Input, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import {signOut, updateProfile} from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import {auth} from "../../config/firebaseConf";
import {useAppDispatch} from "../../redux/Store";
import {addUser} from "../../redux/account/actions/userActions";


const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
})
const ProfileSetup = () => {
    const navigation = useNavigation()
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        image: ""
    })
    const {user} = useAuth()
    const dispatch = useAppDispatch()
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setForm({...form, image: result.assets[0].uri});
        }
    };
    const updateUserProfile = async () => {
        if (user) {
            try {
                const res = updateProfile(user, {displayName: form.name, photoURL: form.image})
                console.log("success", res)
                dispatch(addUser({name: user.displayName , phone: user.phoneNumber}))
                await signOut(auth)
            } catch (e) {
                console.log("error", e)
            }
        }
    }
    const onSubmit = () => {
        schema
            .validate(form)
            .then(async () => {
                await updateUserProfile()
            })
            .catch((err: yup.ValidationError) => {
                if (!err.path) return;
                setErrors({[err.path]: err.message});
            });
    };
    return (
        <Center flex={1} w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Set-up Your Profile
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl isInvalid>
                        <FormControl.Label>Name (Required)</FormControl.Label>
                        <Input placeholder="name" keyboardType="default" maxLength={13}
                               onChangeText={(v) => {
                                   setForm({...form, name: v})
                               }}/>
                        <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
                    </FormControl>
                    <Button onPress={pickImage} variant="subtle">upload a photo</Button>
                    <Button
                        isLoading={loading} onPress={onSubmit}
                        rounded="md" mt="2" color="primary.50">
                        Update Profile
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};

export default ProfileSetup;