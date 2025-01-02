import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import FamImgAndroid from '../../assets/images/FamImgAndroid.png'
import FamImgAndroidIOS from '../../assets/images/FamImgAndroidIOS.png'
import CustomImage from '../../components/CustomImage'
import DividerWithText from '../../components/DividerWithText'
import { RootStackParamList } from '../../Navigation/AuthStack'
import { styles } from './style'


type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">


export default function Welcome({ navigation }: WelcomeProps) {
    return (
        <View style={styles.container}>
            <CustomImage
                imageUrl={Platform.OS === 'ios' ? FamImgAndroidIOS : FamImgAndroid}
                style={styles.imageStyle}
            />

            <View style={styles.contentView}>
                <Text style={styles.textBold}>
                    Discover how easy
                </Text>

                <Text style={styles.textBold}>
                    managing med can be!
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
    );
}

