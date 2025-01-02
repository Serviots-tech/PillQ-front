import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Dimensions, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters'
import FamilyImg from '../../assets/images/happyfamily.png'
import FamImgAndroid from '../../assets/images/FamImgAndroid.png'
import FamImgAndroidIOS from '../../assets/images/FamImgAndroidIOS.png'
import CustomImage from '../../components/CustomImage'
import DividerWithText from '../../components/DividerWithText'
import { RootStackParamList } from '../../Navigation/AuthStack'
import SCALE, { isSmallDevice } from '../../styles'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">


export default function Welcome({ navigation }: WelcomeProps) {
    return (
        <View style={styles.container}>
            <View>
                <CustomImage
                    imageUrl={Platform.OS === 'ios' ? FamImgAndroidIOS :FamImgAndroid }
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.textBold}>
                    Discover how easy
                </Text>

                <Text style={styles.textBold}>
                    mananging med can be !
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
                <DividerWithText />
                <Text style={styles.logInasGuesttextBold}>
                    Log in as a Guest
                </Text>
                <Text style={styles.haveAnAcc}>
                    Already have an account? {' '}
                    <Text style={styles?.logInText} onPress={() => navigation.navigate('SignUp')}>Log In</Text>
                </Text>

                <Text style={styles.privacyPolicyText}>
                    By proceeding, you agree to our{" "}
                    <Text style={styles.privacyPolicyTextBold}>Terms {" "}</Text>
                    and that you have
                    read our {" "}
                    <Text style={styles.privacyPolicyTextBold}>Privacy Policy</Text>
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#00A8A8'
    },
    imageStyle: {
        height: isSmallDevice ? SCALE.normalize(800,'height') : SCALE.normalize(914, 'height'),
        // height:914,
        width: "100%"
    },
    view: {
        flex: 1,
        alignItems: "center",
        paddingTop: isSmallDevice ? moderateScale(45) : moderateScale(55),
    },
    textBold: {
        fontFamily: "Nunito-Bold",
        fontSize: SCREEN_WIDTH < 768 ? 28 : SCALE.normalize(28, 'height'),
        color: "#ffffff"
    },
    button: {
        width: moderateScale(332),
        height: moderateScale(48),
        borderRadius: moderateScale(54),
        marginVertical: moderateScale(16),
        backgroundColor: '#ffffff', // Button background color
    },
    buttonText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: scale(20),
        paddingVertical: moderateScale(12),
        color: '#00A8A8', // Text color for the button
        textAlign: 'center',
    },
    logInasGuesttextBold: {
        fontFamily: "Nunito-Bold",
        fontSize: scale(20),
        paddingVertical: moderateScale(6),
        color: "#ffffff"
    },
    haveAnAcc: {
        flexDirection: 'row',
        fontFamily: "Nunito-Regular",
        fontSize: scale(16),
        color: "#ffffff",
        paddingTop: moderateScale(4)
    },
    logInText: {
        fontFamily: "Nunito-Bold",
        fontSize: scale(16),
        color: "#ffffff",
    },
    privacyPolicyText: {
        fontFamily: "Nunito-Regular",
        fontSize: scale(12), // Adjust for better spacing
        color: "#ffffff",
        textAlign: 'center',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(20),
    },
    privacyPolicyTextBold: {
        fontFamily: "Nunito-Bold",
        color: "#ffffff",
    },

})