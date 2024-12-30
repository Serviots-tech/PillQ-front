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
                <LinearGradient
                    colors={["#00A8A800", "#00A8A8"]} // 0% (transparent) to 70% (opacity)
                    start={{ x: 0.5, y: 0.7 }} // Start near the bottom
                    end={{ x: 0.5, y: 1 }} // End at the bottom
                    style={{ height: "40%", width: "100%", position: "absolute", bottom: 0 }}
                >
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

