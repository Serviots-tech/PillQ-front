import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Platform, Text, TouchableOpacity, View } from 'react-native';
import CustomImage from '../../components/customImage';
import DividerWithText from '../../components/dividerWithText';
import { imagePaths } from '../../constants/imagePath';
import { RootStackParamList } from '../../Navigation/Routes';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setGuestUser } from '../../redux/slices/registerAsGuest';
import { useAuth } from '../../components/authContext';
import NetInfo from '@react-native-community/netinfo';

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function Welcome({ navigation }: WelcomeProps) {

    const dispatch = useDispatch<AppDispatch>()
    const { isLoggedout, setLogoutFalse } = useAuth();
    const [isConnected, setIsConnected] = useState<boolean>(true); // Track internet status

    useEffect(() => {
        if (isLoggedout) {
            setLogoutFalse()
        }

    }, [isLoggedout])

    useEffect(() => {
        const backAction = () => {
            Alert.alert('Exit App', 'Are you sure you want to exit?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => BackHandler.exitApp(),
                },
            ]);
            return true; // Prevent default back button behavior
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove(); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsConnected(state.isConnected ?? false);; // Update the connection status
        });

        return () => {
            unsubscribe(); // Cleanup on unmount
        };
    }, []);

    useEffect(() => {
        if (!isConnected) {
            Alert.alert('No Internet', 'Please connect to the internet before proceeding.');
        }
    }, [isConnected]);

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
                    onPress={() =>
                        isConnected
                            ? navigation.navigate('SignUp') // Navigate if connected
                            : Alert.alert(
                                'No Internet Connection', // Alert title
                                'Please connect to the internet to proceed.', // Alert message
                                [{ text: 'OK' }] // Optional action
                            )
                    } >
                    <Text style={styles.buttonText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <DividerWithText />

                <Text
                    style={styles.logInasGuesttextBold}
                    onPress={() => {
                        dispatch(setGuestUser(true));
                        isConnected
                            ? navigation.navigate('LogInAsGuest') // Navigate if connected
                            : Alert.alert(
                                'No Internet Connection', // Alert title
                                'Please connect to the internet to proceed.', // Alert message
                                [{ text: 'OK' }] // Optional action
                            )
                    }}>
                    Log in as a Guest
                </Text>
                <Text style={styles.haveAnAcc}>
                    Already have an account?{' '}
                    <Text
                        style={styles?.logInText}
                        onPress={() =>
                            isConnected
                                ? navigation.navigate('LogIn') // Navigate if connected
                                : Alert.alert(
                                    'No Internet Connection', // Alert title
                                    'Please connect to the internet to proceed.', // Alert message
                                    [{ text: 'OK' }] // Optional action
                                )
                        } >
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
