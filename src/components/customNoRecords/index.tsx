import { StyleProp, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { imagePaths } from '../../constants/imagePath'
import FastImage, { ImageStyle as FastImageStyle } from 'react-native-fast-image'


type ImageProps = PropsWithChildren<{
    style?: StyleProp<FastImageStyle>;
}>

const CustomNoRecords = ({
  style,
}: ImageProps) => {
  return (
    <FastImage
      style={style}
      source={imagePaths?.noRecords}
      resizeMode='cover'
    />
  )
}

export default CustomNoRecords

const styles = StyleSheet.create({})