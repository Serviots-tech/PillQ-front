import { StyleProp, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import FastImage, { ImageStyle as FastImageStyle } from 'react-native-fast-image'
import { imagePaths } from '../../constants/imagePath'


type ImageProps = PropsWithChildren<{
    style?: StyleProp<FastImageStyle>;

}>
const CustomLoader = ({
    style,
}: ImageProps) => {
    return (
        <FastImage
            style={style}
            source={imagePaths?.circleLoader}
            resizeMode='cover'
        />


    )
}

export default CustomLoader

const styles = StyleSheet.create({})