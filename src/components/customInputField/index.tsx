import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';
import styles from './style';

interface CustomInputFieldProps {
    fieldName: string;
    label: string;
    value: string;
    onChangeText: any;
    onBlur: any;
    touched?: boolean;
    errors?: string;
    placeholder: string;
    style?: object;
    placeholderTextColor?: string;
    isDisable?: boolean;
    icon?: React.ReactNode;
    keyboardType?:KeyboardTypeOptions;
    max?:number
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
    placeholderTextColor = '#7E8183',
    isDisable = false,
    icon,
    keyboardType,
    max
}) => (
    <View style={[styles.fieldContainer, style]}>
        <Text style={styles.fieldTitle}>{label}</Text>
        <View style={[styles.inputContainer, isDisable && styles.inputDisabled]}>
            {icon && <View style={styles.icon}>{icon}</View>}
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
                maxLength={max ? max : undefined}
                keyboardType={keyboardType} 
                placeholderTextColor={placeholderTextColor}
            />
        </View>
        {touched && errors && <Text style={styles.error}>{errors}</Text>}
    </View>
);
