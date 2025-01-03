import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import {  BackIcon, BouncingCircles } from '../../constants/svgs'


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
        >{isLoading ?<View style={{alignItems:'center'}}><BouncingCircles/></View>:
            <>{isIcon ? (
                <BackIcon />
            ) : <Text style={buttonTextStyle}>{label}</Text>}
            </>
        }
        </TouchableOpacity>
    );
}
