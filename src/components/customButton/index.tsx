import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { BackIcon } from '../../constants/svgs'


export default function CustomButton({
    viewStyle,
    label,
    buttonTextStyle,
    onPress,
    isIcon = false
}: {
    viewStyle?: any;
    label: any;
    buttonTextStyle?: any;
    onPress: any;
    isIcon?: boolean
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={viewStyle}
        >
            {isIcon ? (
                <BackIcon />
            ) : <Text style={buttonTextStyle}>{label}</Text>}
        </TouchableOpacity>
    );
}
