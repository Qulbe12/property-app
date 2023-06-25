import {FirebaseRecaptcha, FirebaseRecaptchaVerifier} from 'expo-firebase-recaptcha';
import {useState} from "react";
import {PhoneAuthProvider} from "firebase/auth"
import {auth} from "../../config/firebaseConf";
import {useAppDispatch, useAppSelector} from "../../redux/Store";
import {setVerificationCode} from "../../redux/account/AuthSlice";
import useAuth from "../../hooks/useAuth";
import {Card} from "native-base";

function CustomPhoneAuthScreen() {
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const dispatch = useAppDispatch()
    const {firebaseConfig} = useAuth()
    const {phone} = useAppSelector(state => state.auth)

    async function onPressSendVerificationCode() {

        // Create an application verifier from the reCAPTCHA token
        if (!recaptchaToken) return;
        const applicationVerifier = new FirebaseRecaptchaVerifier(recaptchaToken);

        // Start phone authentication
        const phoneProvider = new PhoneAuthProvider(auth);
        const verificationId = await phoneProvider.verifyPhoneNumber(
            phone,
            applicationVerifier
        );
    }

    return (
        <Card p={0} m={0} safeArea w="100%" h="100%">

            <FirebaseRecaptcha
                firebaseConfig={firebaseConfig}
                // Store the reCAPTCHA token when it has been verified
                onVerify={token => {
                    console.log(token)
                    dispatch(setVerificationCode(token))
                }}
            />
        </Card>
    );
}

export default CustomPhoneAuthScreen