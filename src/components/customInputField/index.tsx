import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

interface CustomInputFieldProps {
    fieldName: string;
    label:string
    value: string;
    onChangeText: any;
    onBlur: any;
    touched?: boolean;
    errors?: string;
    placeholder: string;
    style?: object;
    placeholderTextColor?: string;
    isDisable?: boolean;
}

export const CustomInputField: React.FC<CustomInputFieldProps> = ({ 
    fieldName,
    label,
    value, 
    onChangeText, 
    onBlur, 
    touched = false, 
    errors, 
    placeholder, 
    style, 
    placeholderTextColor = 'lightgray',
    isDisable = false
}) => (
    <View style={[styles.fieldContainer, style]}>
        <Text style={styles.fieldTitle}>{label}</Text>
        <TextInput
            style={[
                styles.input, 
                touched && errors ? styles.inputError : null, 
                isDisable ? styles.inputDisabled : null
            ]}
            placeholder={placeholder}
            onChangeText={isDisable ? null : onChangeText(fieldName)} 
            onBlur={isDisable ? null : onBlur(fieldName)}
            value={value}
            placeholderTextColor={placeholderTextColor}
        />
        {touched && errors && <Text style={styles.error}>{errors}</Text>}
    </View>
);