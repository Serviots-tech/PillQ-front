import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'; // Import styles from the separate CSS file

interface CustomRadioButtonProps {
    options: { label: string; value: string; icon?: JSX.Element }[]; // Added `icon` as JSX.Element
    selectedOption: string | null;
    onSelect: (option: string) => void;
    label: string;
    containerStyle?: object;
    buttonStyle?: object;
    buttonTextStyle?: object;
    selectedButtonStyle?: object;
    selectedButtonTextStyle?: object;
    iconStyle?: object; // Optional icon styling
    selectedIcon?: JSX.Element; // Add `selectedIcon` for the right side icon,
    error?: string | null
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
    options,
    selectedOption,
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
    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.title}>{label}</Text>}
            {/* <Text
                style={[
                    styles.buttonText,
                    buttonTextStyle]}
            >
                {label}
            </Text> */}
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.button,
                        buttonStyle,
                        selectedOption === option.value && [styles.selectedButton, selectedButtonStyle],
                    ]}
                    onPress={() => onSelect(option.value)}
                >
                    <View style={styles.optionContent}>
                        {option?.icon && (
                            <View
                                style={[
                                    styles.iconContainer,
                                    iconStyle,
                                    selectedOption === option.value && { color: '#00A8A8' }, // Adjusted for correct color change
                                ]}
                            >
                                {React.cloneElement(option.icon, {
                                    fill: selectedOption === option.value ? '#00A8A8' : '#000',
                                    color: selectedOption === option.value ? '#00A8A8' : '#000', // Dynamically change the color
                                })}
                            </View>
                        )}

                        <Text
                            style={[
                                styles.buttonText,
                                buttonTextStyle,
                                selectedOption === option.value && [styles.selectedButtonText, selectedButtonTextStyle],
                            ]}
                        >
                            {option.label}
                        </Text>
                    </View>
                    {selectedOption === option.value && selectedIcon && (
                        <View style={styles.selectedIconContainer}>{selectedIcon}</View>
                    )}
                </TouchableOpacity>
            ))}
            {error && <Text style={styles.errormsg}>{error}</Text>}
        </View>
    );
};

export default CustomRadioButton;
