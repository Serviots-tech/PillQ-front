import React, { PropsWithChildren } from 'react';
import { StyleProp, View } from 'react-native';
import FastImage, { ImageStyle as FastImageStyle,Source } from 'react-native-fast-image';

type ImageProps = PropsWithChildren<{
    imageUrl: number | Source,
    style?: StyleProp<FastImageStyle>; 
   
}>


export default function CustomImage({
    imageUrl,
    style,
     }: ImageProps) {
    console.log("🚀 ~ imageUrl:", imageUrl)
    return (
        <View>
            <FastImage
                style={style}
                source={imageUrl}
            />
        </View>
    )
}

