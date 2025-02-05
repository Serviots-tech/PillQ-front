import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';
import { horizontalScale, moderateScale } from '../../styles';
import { useAuth } from '../../components/authContext';
import { navigationStrings } from '../../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/Routes';
import CustomImage from '../../components/customImage';
import { imagePaths } from '../../constants/imagePath';

export default function SplashScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { isAuthenticated, isFetchProfileLoading } = useAuth();

    setTimeout(() => {
        if (!isAuthenticated && !isFetchProfileLoading) {
            navigation.navigate(navigationStrings.WELCOME);
        }
        if (isAuthenticated && !isFetchProfileLoading) {
            navigation.navigate(navigationStrings.HOME);
        }
    }, 3500);

    return (
        <View style={styles.container}>
            <CustomImage imageUrl={imagePaths?.splashImage} style={styles.gif} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A8A8',
    },
    gif: {
        width: horizontalScale(300),
        height: moderateScale(300),
    },
});
