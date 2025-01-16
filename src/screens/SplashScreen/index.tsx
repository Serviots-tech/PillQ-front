import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { PillQLSvg } from '../../constants/svgs';
import { horizontalScale, moderateScale } from '../../styles';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { getUserProfile } from '../../redux/actions/userAction';
import { setLoginStatus } from '../../redux/slices/isLoggedIn';
import { CombinedStackParamList } from '../../Navigation/CombineStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SplashScreenProps = NativeStackScreenProps<CombinedStackParamList, 'SplashScreen'>;

export default function SplashScreen({ navigation }: SplashScreenProps) {
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoScale = useRef(new Animated.Value(3)).current;
    const [showText, setShowText] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Pill";
    const dispatch = useDispatch<AppDispatch>()

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
                if (index >= fullText.length) clearInterval(interval);
            }, 80);
        }
    }, [showText]);

    useEffect(() => {
        
        // fetch profile 
        dispatch(getUserProfile()).then((res) => {
            if (res?.payload?.responseStatus === 200) {
                setTimeout(() => {
                    dispatch(setLoginStatus(true))
                }, 3000);
            }
            else {
                setTimeout(() => {
                    navigation?.navigate("LogIn")
                }, 3000);
            }

        }).catch((err) => {
            setTimeout(() => {
                navigation?.navigate("LogIn")
            }, 3000);
        })
    })


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
