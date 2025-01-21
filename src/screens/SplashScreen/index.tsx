import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { PillQLSvg } from '../../constants/svgs';
import { horizontalScale, moderateScale } from '../../styles';
import { useAuth } from '../../components/authContext';
import { navigationStrings } from '../../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/Routes';

export default function SplashScreen() {
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoScale = useRef(new Animated.Value(3)).current;
    const [showText, setShowText] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Pill";
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { isAuthenticated, isFetchProfileLoading } = useAuth();

    useEffect(() => {

        // Animate the logo
        Animated.sequence([
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(logoScale, {
                toValue: 1,
                duration: 1000,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true,
            }),
        ]).start(() => {
            // After logo animation, start the text animation
            setShowText(true);
        });

    }, []);

    useEffect(() => {
       
        if (showText && fullText.length > 0) {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedText((prev) => {
                    return prev + fullText[index - 1];
                });
                index++;
                if (index >= fullText.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        if (!isAuthenticated && !isFetchProfileLoading) {
                            navigation.navigate(navigationStrings.WELCOME);
                        }
                        if (isAuthenticated && !isFetchProfileLoading) {
                            navigation.navigate(navigationStrings.HOME);
                        }
                    }, 1000); // 2 seconds timeout
                }

            }, 80);
        }

    }, [showText]);



    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {/* Text Animation */}
                {showText && <Text style={styles.typewriter}>{displayedText}</Text>}

                {/* Logo Animation */}
                <Animated.View
                    style={[
                        styles.logoContainer,
                        {
                            opacity: logoOpacity,
                            transform: [{ scale: logoScale }],
                        },
                    ]}
                >
                    <Text style={styles.logo}><PillQLSvg /></Text>
                </Animated.View>

            </View>
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
    row: {
        flexDirection: 'row', // Ensures logo and text are in the same line
        alignItems: 'center', // Centers them vertically
    },
    logoContainer: {
        marginRight: horizontalScale(10), // Spacing between the logo and the text
    },
    logo: {
        fontSize: moderateScale(100),
        color: '#fff',
    },
    typewriter: {
        fontSize: moderateScale(70),
        color: '#fff',
        fontFamily: 'Nunito-Bold'
    },
});
