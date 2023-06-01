import React, {useRef, useState} from 'react';import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';
import {app, auth} from "../../config/firebaseConf";
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import {  PhoneAuthProvider, signInWithCredential } from 'firebase/auth';




const TestComponent = () => {
    const recaptchaVerifier = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verificationId, setVerificationId] = useState("");
    const [verificationCode, setVerificationCode] = useState("");

    const firebaseConfig = app ? app.options : undefined;
    const [message, showMessage] = useState({text:"", color:""});
    const attemptInvisibleVerification = false;

    return (
        <View style={{ padding: 20, marginTop: 50 }}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                // attemptInvisibleVerification
            />
            <Text style={{ marginTop: 20 }}>Enter phone number</Text>
            <TextInput
                style={{ marginVertical: 10, fontSize: 17 }}
                placeholder="+1 999 999 9999"
                autoFocus
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                onChangeText={setPhoneNumber}
            />
            <Button
                title="Send Verification Code"
                disabled={!phoneNumber}
                onPress={async () => {
                    // The FirebaseRecaptchaVerifierModal ref implements the
                    // FirebaseAuthApplicationVerifier interface and can be
                    // passed directly to `verifyPhoneNumber`.
                    try {
                        const phoneProvider = new PhoneAuthProvider(auth);
                        const verificationId = await phoneProvider.verifyPhoneNumber(
                            phoneNumber,
                            recaptchaVerifier.current
                        );
                        setVerificationId(verificationId);
                        showMessage({
                            text: 'Verification code has been sent to your phone.',
                            color: ""
                        });
                    } catch (err:any
                        ) {
                        showMessage({ text: `Error: ${err.message}`, color: 'red' });
                    }
                }}
            />
            <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
            <TextInput
                style={{ marginVertical: 10, fontSize: 17 }}
                editable={!!verificationId}
                placeholder="123456"
                onChangeText={setVerificationCode}
            />
            <Button
                title="Confirm Verification Code"
                disabled={!verificationId}
                onPress={async () => {
                    try {
                        const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
                        await signInWithCredential(auth, credential);
                        showMessage({ text: 'Phone authentication successful 👍', color: "" });
                    } catch (err:any) {
                        showMessage({ text: `Error: ${err.message}`, color: 'red' });
                    }
                }}
            />
            {message ? (
                <TouchableOpacity
                    style={[
                        StyleSheet.absoluteFill,
                        // { backgroundColor: 0xffffffee, justifyContent: 'center' },
                    ]}
                    onPress={() => showMessage({text: "" , color: ""})}>
                    <Text
                        style={{
                            color: message.color || 'blue',
                            fontSize: 17,
                            textAlign: 'center',
                            margin: 20,
                        }}>
                        {message.text}
                    </Text>
                </TouchableOpacity>
            ) : undefined}
            {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
        </View>
    );

};

export default TestComponent;