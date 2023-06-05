// import {Box, Button, Center, FormControl, Input, VStack} from 'native-base';
// import React, {useRef, useState} from 'react';
// import {auth} from "../../config/firebaseConf";
// import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";
// import {PhoneAuthProvider, signInWithCredential} from 'firebase/auth';
// import useAuth from "../../hooks/useAuth";
// import {useNavigation} from "@react-navigation/native";
//
// const TestComponent = () => {
//     const navigation = useNavigation()
//     const {firebaseConfig} = useAuth()
//     const [form, setForm] = useState({
//         phone: "",
//         password: ""
//     })
//     const recaptchaVerifier = useRef(null)
//
//     const [verificationId, setVerificationId] = useState("");
//     const [verificationCode, setVerificationCode] = useState("");
//     const onVerification = async () => {
//         try {
//             const phoneProvider = new PhoneAuthProvider(auth);
//             const verificationId = await phoneProvider.verifyPhoneNumber(
//                 form.phone,
//                 recaptchaVerifier.current
//             );
//             console.log(verificationId)
//             setVerificationId(verificationId);
//             alert(
//                 'Verification code has been sent to your phone.',
//             );
//         } catch (err: any) {
//             console.log(err)
//             alert(`Error: ${err.message}`);
//         }
//     }
//
//     const confirmOTP = async () => {
//         try {
//             const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
//             const res = await signInWithCredential(auth, credential);
//             console.log(res.user)
//             alert({text: 'Phone authentication successful 👍'});
//         } catch (err: any) {
//             alert({text: `Error: ${err.message}`, color: 'red'});
//         }
//     }
//
//     return (
//         <Center flex={1} w="100%">
//             <Box safeArea p="2" py="8" w="90%" maxW="290">
//                 <FirebaseRecaptchaVerifierModal
//                     ref={recaptchaVerifier}
//                     firebaseConfig={firebaseConfig}
//                     attemptInvisibleVerification
//                 />
//                 <VStack>
//                     <FormControl>
//                         <FormControl.Label>Phone number</FormControl.Label>
//                         <Input keyboardType="numbers-and-punctuation" onChangeText={(v) => {
//                             setForm({...form, phone: v})
//                         }}/>
//                         {/*<FormControl.ErrorMessage>{errors.phone}</FormControl.ErrorMessage>*/}
//                     </FormControl>
//                     <Button onPress={onVerification}>send verification code</Button>
//
//                     <FormControl>
//                         <FormControl.Label>Password</FormControl.Label>
//                         <Input keyboardType="visible-password" onChangeText={setVerificationCode}/>
//                         {/*<FormControl.ErrorMessage>{errors.phone}</FormControl.ErrorMessage>*/}
//                     </FormControl>
//                     <Button onPress={confirmOTP}>click here to sign up</Button>
//                     <Button onPress={() => navigation.navigate("SignIn" as never)}>click here to sign in</Button>
//                 </VStack>
//             </Box>
//         </Center>
//     );
// };
//
// export default TestComponent;