import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

interface CustomCheckboxProps {
    options: { label: string; value: string; icon?: JSX.Element }[]; // Added `icon` as JSX.Element
    selectedOptions: string[]; // Array for multiple selected options
    onSelect: (option: string[]) => void;
    label: string;
    containerStyle?: object;
    buttonStyle?: object;
    buttonTextStyle?: object;
    selectedButtonStyle?: object;
    selectedButtonTextStyle?: object;
    iconStyle?: object; // Optional icon styling
    selectedIcon?: JSX.Element; // Add `selectedIcon` for the right side icon
    error?: string | null;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    options,
    selectedOptions,
    onSelect,
    label,
    containerStyle,
    buttonStyle,
    buttonTextStyle,
    selectedButtonStyle,
    selectedButtonTextStyle,
    iconStyle,
    selectedIcon,
    error
}) => {
    const handleSelect = (value: string) => {
        // Toggle the value in the selectedOptions array
        const updatedOptions = selectedOptions.includes(value)
            ? selectedOptions.filter(option => option !== value) // Remove if already selected
            : [...selectedOptions, value]; // Add new selection

        onSelect(updatedOptions); // Pass the updated array to the parent
    };

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.title}>{label}</Text>}
            {options?.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.button,
                        buttonStyle,
                        selectedOptions.includes(option.value) && [styles.selectedButton, selectedButtonStyle],
                    ]}
                    onPress={() => handleSelect(option.value)}
                >
                    <View style={styles.optionContent}>
                        {option?.icon && (
                            <View
                                style={[
                                    styles.iconContainer,
                                    iconStyle,
                                    selectedOptions.includes(option.value) && { color: '#00A8A8' },
                                ]}
                            >
                                {React.cloneElement(option.icon, {
                                    fill: selectedOptions.includes(option.value) ? '#00A8A8' : '#000',
                                    color: selectedOptions.includes(option.value) ? '#00A8A8' : '#000',
                                })}
                            </View>
                        )}

                        <Text
                            style={[
                                styles.buttonText,
                                buttonTextStyle,
                                selectedOptions.includes(option.value) && [styles.selectedButtonText, selectedButtonTextStyle],
                            ]}
                        >
                            {option.label}
                        </Text>
                    </View>
                    {selectedOptions.includes(option.value) && selectedIcon && (
                        <View style={styles.selectedIconContainer}>{selectedIcon}</View>
                    )}
                </TouchableOpacity>
            ))}
            {error && <Text style={styles.errormsg}>{error}</Text>}
        </View>
    );
};

export default CustomCheckbox;
