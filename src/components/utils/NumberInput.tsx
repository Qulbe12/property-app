import React, { useState } from 'react';
import { TextInput } from 'react-native';

interface NumberInputProps {
    maxLength: number;
}
const NumberInput = ({ maxLength } : NumberInputProps) => {
    const [text, setText] = useState('');

    const handleTextChange = (inputText:string) => {
        // Remove any non-numeric characters
        const numericText = inputText.replace(/[^0-9]/g, '');

        // Limit the number of characters
        const limitedText = numericText.slice(0, maxLength);

        setText(limitedText);
    };

    return (
        <TextInput
            keyboardType="phone-pad"
            value={text}
            maxLength={maxLength}
            onChangeText={handleTextChange}
        />
    );
};

export default NumberInput;
