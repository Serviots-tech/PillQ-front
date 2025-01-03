import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AnimatedLoader, BackIcon } from '../../constants/svgs'


export default function CustomButton({
    viewStyle,
    label,
    buttonTextStyle,
    onPress,
    isIcon = false,
    isLoading =false
}: {
    viewStyle?: any;
    label: any;
    buttonTextStyle?: any;
    onPress: any;
    isIcon?: boolean;
    isLoading?:boolean
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={viewStyle}
        >{isLoading ?<AnimatedLoader/>:
            <>{isIcon ? (
                <BackIcon />
            ) : <Text style={buttonTextStyle}>{label}</Text>}
            </>
        }
        </TouchableOpacity>
    );
}
