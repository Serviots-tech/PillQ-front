import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../App'
import FamilyImg from '../assets/images/happyfamily.png'
import CustomImage from '../components/CustomImage'

type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">


export default function Welcome({ navigation }: WelcomeProps) {
    return (
        <View style={styles.container}>
            <View>
                <CustomImage
                    imageUrl={FamilyImg}
                    style={styles.imageStyle}
                />

            </View>
            <View>
                {/* <Text>
                    oiwue9dfipuorwgfpoi
                </Text> */}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A8A8'
    },
    imageStyle: {
        height: 456,
        width: 412
    },

})