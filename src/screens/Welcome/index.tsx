import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import CustomImage from '../../components/customImage';
import DividerWithText from '../../components/dividerWithText';
import { imagePaths } from '../../constants/imagePath';
import { RootStackParamList } from '../../Navigation/Routes';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setGuestUser } from '../../redux/slices/registerAsGuest';
import { useAuth } from '../../components/authContext';

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function Welcome({ navigation }: WelcomeProps) {

    const dispatch = useDispatch<AppDispatch>()
    const { isLoggedout, setLogoutFalse } = useAuth();

    useEffect(() => {
        if (isLoggedout) {
            setLogoutFalse()
        }

    }, [isLoggedout])


    return (
        <View style={styles.container}>
            <CustomImage
                imageUrl={
                    Platform.OS === 'ios'
                        ? imagePaths?.FamImgAndroidIOS
                        : imagePaths?.FamImgAndroid
                }
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
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <DividerWithText />

                <Text
                    style={styles.logInasGuesttextBold}
                    onPress={() => { dispatch(setGuestUser(true)); navigation.navigate('LogInAsGuest') }}>
                    Log in as a Guest
                </Text>
                <Text style={styles.haveAnAcc}>
                    Already have an account?{' '}
                    <Text
                        style={styles?.logInText}
                        onPress={() => navigation.navigate('LogIn')}>
                        Log In
                    </Text>
                </Text>

                <Text style={styles.privacyPolicyText}>
                    By proceeding, you agree to our{' '}
                    <Text style={styles.privacyPolicyTextBold}>
                        Terms{' '}
                    </Text>
                    and that you have read our{' '}
                    <Text style={styles.privacyPolicyTextBold}>
                        Privacy Policy
                    </Text>
                </Text>
            </View>
        </View>
    );
}
