import { Image, ImageBackground, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import LinearGradient from 'react-native-linear-gradient';

type ImageProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType,
    style?: StyleProp<ImageStyle>;
   
}>

export default function CustomImage({
    imageUrl,
    style,
     }: ImageProps) {
    return (
        <View>
            <ImageBackground style={style} source={imageUrl} >
            </ImageBackground>
        </View>
    )
}

