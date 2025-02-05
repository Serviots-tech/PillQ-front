import React, { PropsWithChildren } from 'react';
import { ImageBackground, ImageSourcePropType, ImageStyle, StyleProp, View } from 'react-native';

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

