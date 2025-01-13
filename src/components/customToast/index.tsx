// import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { Gesture, GestureDetector } from 'react-native-gesture-handler';
// import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated';
// import { imagePaths } from '../../constants/imagePath';
// import { Platform } from 'react-native';
// import { horizontalScale, moderateScale, verticalScale } from '../../styles';

// interface ToastProps { }

// export interface ToastConfig {
//     type: 'success' | 'info' | 'error' | 'warning',
//     text: string,
//     duration: number
// }

// export interface ToastRef {
//     show: (config: ToastConfig) => void;
// }

// const CustomToastTimer = forwardRef<ToastRef, ToastProps>(({ }, ref) => {
//     const toastBottomAnimation = useSharedValue(-100); // Start below the screen
//     const scaleAnimation = useSharedValue(0.9);
//     const iconScaleAnimation = useSharedValue(1);
//     const progressBarAnimation = useSharedValue(1);

//     const context = useSharedValue(0)
//     const [showing, setShowing] = useState(false)
//     const [toastConfig, setToastConfig] = useState<ToastConfig>({
//         type: "success",
//         text: '',
//         duration: 0
//     })

//     const BOTTOM_VALUE = 160;

//     useImperativeHandle(ref, () => ({ show }), [])

//     const show = useCallback(({ duration, type, text }: ToastConfig) => {
//         setShowing(true);
//         setToastConfig({ text, type, duration });

//         progressBarAnimation.value = withTiming(0, { duration: 0 }); // Reset to start
//         progressBarAnimation.value = withTiming(1, { duration });    // Animate to end

//         scaleAnimation.value = withTiming(1, { duration: 100 });
//         iconScaleAnimation.value = withSequence(
//             withTiming(1.1, { duration: 100 }),
//             withTiming(1, { duration: 100 })
//         );

//         toastBottomAnimation.value = withSequence(
//             withTiming(BOTTOM_VALUE, { duration: 500 }),
//             withDelay(
//                 duration,
//                 withTiming(-100, { duration: 500 }, finish => {
//                     if (finish) runOnJS(setShowing)(false);
//                 })
//             )
//         );
//     }, []);


//     const animatedTopStyles = useAnimatedStyle(() => ({
//         bottom: toastBottomAnimation.value,
//         transform: [{ scale: scaleAnimation.value }],
//         opacity: showing ? 1 : 0
//     }))

//     const animatedIconStyles = useAnimatedStyle(() => ({
//         transform: [{ scale: iconScaleAnimation.value }],
//     }))

//     const panGesture = Gesture.Pan()
//         .onBegin(() => {
//             context.value = toastBottomAnimation.value
//         }).onUpdate((event) => {
//             if (event.translationY < 100) {
//                 toastBottomAnimation.value = withSpring(
//                     context.value + event.translationY,
//                     {
//                         duration: 600,
//                         stiffness: 100
//                     }
//                 )
//             }
//         }).onEnd((event) => {
//             const isSwipeUp = event.translationY < 0;
//             const newPostion = isSwipeUp ? -100 : BOTTOM_VALUE;
//             toastBottomAnimation.value = withTiming(
//                 newPostion,
//                 { duration: 500 },
//                 finish => {
//                     if (finish && isSwipeUp) runOnJS(setShowing)(false)
//                 }
//             )
//         });

//     const getToastStyle = useMemo(() => {
//         switch (toastConfig.type) {
//             case 'success':
//                 return {
//                     container: [style.toastContainer, style.successToastContainer, ],
//                     text: style.successToastText,
//                     progressBar: style.successProgressBar
//                 }
//             case 'info':
//                 return {
//                     container: [style.toastContainer, style.infoToastContainer, ],
//                     text: style.infoToastText,
//                     progressBar: style.infoProgressBar
//                 }
//             case 'error':
//                 return {
//                     container: [style.toastContainer, style.errorToastContainer, ],
//                     text: style.errorToastText,
//                     progressBar: style.errorProgressBar
//                 }
//             case 'warning':
//                 return {
//                     container: [style.toastContainer, style.warningToastContainer,],
//                     text: style.infoToastText,
//                     progressBar: style.infoProgressBar
//                 }
//             default:
//                 return {
//                     container: [style.toastContainer, style.successToastContainer],
//                     text: style.successToastText,
//                     progressBar: style.successProgressBar
//                 }
//         }
//     }, [toastConfig.type])

//     const { container, text, progressBar } = getToastStyle

//     return (
//         showing ? <GestureDetector gesture={panGesture}>
//             <Animated.View style={[container, animatedTopStyles]}>
//                 <Animated.Image
//                     source={
//                         toastConfig.type === 'success' ? imagePaths?.confirmation :
//                             toastConfig.type === 'info' ? imagePaths?.info : toastConfig.type === 'warning' ? imagePaths?.warning :
//                                 imagePaths?.error
//                     }
//                     style={[style?.toastIcon, animatedIconStyles]}
//                 />
//                 <Text style={[style.toastText, text]}>{toastConfig.text}</Text>
//             </Animated.View>
//         </GestureDetector> : null
//     )
// });

// export default CustomToastTimer

// const style = StyleSheet.create({
//     toastContainer: {
//         position: 'absolute',
//         bottom: 10,
//         padding: 12,
//         borderRadius: moderateScale(40),
//         flexDirection: 'row',
//         alignItems: 'center',
//         alignSelf: 'center',
//         elevation: 5,
//         shadowOffset: {
//             width: 0,
//             height: verticalScale(2)
//         },
//         maxWidth: '80%',
//         minWidth: horizontalScale(196), 
//     },
//     toastText: {
//         marginLeft: horizontalScale(10),
//         fontSize: moderateScale(16),
//         flexShrink: 1,
//         flexGrow:1,
//         marginRight: horizontalScale(10)
//     },
//     toastIcon: {
//         marginLeft: horizontalScale(12),
//         width: 17,
//         height: verticalScale(17),
//         resizeMode: 'contain',
//     },
//     successToastContainer: {
//         backgroundColor: '#E6E6E6',
//     },
//     infoToastContainer: {
//         backgroundColor: '#E6E6E6',
//     },
//     warningToastContainer: {
//         backgroundColor: '#E6E6E6',
//     },
//     errorToastContainer: {
//         backgroundColor: '#E6E6E6',
//     },
//     successToastText: {
//         color: '#333333',
//         fontFamily:'Nunito-Bold'
//     },
//     infoToastText: {
//         color: '#333333',
//          fontFamily: 'Nunito-Bold'
//     },
//     errorToastText: {
//         color: '#333333',
//          fontFamily: 'Nunito-Bold'
//     },
//     progress_bar: {
//         position: 'absolute',
//         bottom: -4,
//         left: 0.3,
//         height: 4,
//         backgroundColor: '#1f8722', 
//         width: 0,
//     },
//     closeButton: {
//         marginLeft: horizontalScale(10),
//         padding: 3
//     },
//     close: {
//         tintColor: '#888',
//         height: 10,
//         width: 10
//     },
//     successProgressBar: {
//         backgroundColor: '#00381A'
//     },
//     infoProgressBar: {
//         backgroundColor: '#001D40'
//     },
//     errorProgressBar: {
//         backgroundColor: '#580B0A'
//     },
// })



import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { imagePaths } from '../../constants/imagePath';
import { horizontalScale, moderateScale, verticalScale } from '../../styles';

interface ToastProps { }

export interface ToastConfig {
    type: 'success' | 'info' | 'error' | 'warning';
    text: string;
    duration: number;
}

export interface ToastRef {
    show: (config: ToastConfig) => void;
}

const CustomToastTimer = forwardRef<ToastRef, ToastProps>(({ }, ref) => {
    const opacityAnimation = useSharedValue(0);
    const scaleAnimation = useSharedValue(0.9);

    const [showing, setShowing] = useState(false);
    const [toastConfig, setToastConfig] = useState<ToastConfig>({
        type: 'success',
        text: '',
        duration: 3000,
    });

    useImperativeHandle(ref, () => ({
        show: ({ duration, type, text }: ToastConfig) => {
            setToastConfig({ type, text, duration });
            setShowing(true);

            // Animate toast to appear
            opacityAnimation.value = withTiming(1, { duration: 300 });
            scaleAnimation.value = withTiming(1, { duration: 300 });

            // Animate toast to disappear after the duration
            setTimeout(() => {
                opacityAnimation.value = withTiming(0, { duration: 300 }, () => {
                    runOnJS(setShowing)(false);
                });
                scaleAnimation.value = withTiming(0.9, { duration: 300 });
            }, duration);
        },
    }), []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacityAnimation.value,
        transform: [{ scale: scaleAnimation.value }],
    }));

    const getToastStyle = () => {
        switch (toastConfig.type) {
            case 'success':
                return [styles.toastContainer, styles.successToastContainer];
            case 'info':
                return [styles.toastContainer, styles.infoToastContainer];
            case 'error':
                return [styles.toastContainer, styles.errorToastContainer];
            case 'warning':
                return [styles.toastContainer, styles.warningToastContainer];
            default:
                return [styles.toastContainer];
        }
    };

    return (
        showing && (
            <Animated.View style={[getToastStyle(), animatedStyle]}>
                <Image
                    source={
                        toastConfig.type === 'success' ? imagePaths?.confirmation :
                            toastConfig.type === 'info' ? imagePaths?.info :
                                toastConfig.type === 'error' ? imagePaths?.error :
                                    imagePaths?.warning
                    }
                    style={styles.toastIcon}
                />
                <Text style={styles.toastText}>{toastConfig.text}</Text>
            </Animated.View>
        )
    );
});

export default CustomToastTimer;

// const styles = StyleSheet.create({
//     toastContainer: {
//         position: 'absolute',
//         bottom: 180,
//         padding: 12,
//         borderRadius: moderateScale(40),
//         flexDirection: 'row',
//         alignItems: 'center',
//         alignSelf: 'center',
//         maxWidth: '80%',
//         minWidth: horizontalScale(200),
//         elevation: 5,
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//     },
//     toastText: {
//         marginLeft: horizontalScale(10),
//         fontSize: moderateScale(16),
//         color: '#fff',
//         flexShrink: 1,
//         flexGrow: 1,
//     },
//     toastIcon: {
//         width: verticalScale(20),
//         height: verticalScale(20),
//         resizeMode: 'contain',
//     },
//     successToast: {
//         backgroundColor: '#28a745',
//     },
//     infoToast: {
//         backgroundColor: '#17a2b8',
//     },
//     errorToast: {
//         backgroundColor: '#dc3545',
//     },
//     warningToast: {
//         backgroundColor: '#ffc107',
//     },
// });

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        bottom: 160,
        padding: 12,
        borderRadius: moderateScale(40),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: verticalScale(2)
        },
        maxWidth: '80%',
        minWidth: horizontalScale(196), 
    },
    toastText: {
        marginLeft: horizontalScale(10),
        fontSize: moderateScale(16),
        flexShrink: 1,
        flexGrow:1,
        marginRight: horizontalScale(10),
        color: '#333333',
        fontFamily: 'Nunito-Bold'
    },
    toastIcon: {
        marginLeft: horizontalScale(12),
        width: 17,
        height: verticalScale(17),
        resizeMode: 'contain',
    },
    successToastContainer: {
        backgroundColor: '#E6E6E6',
    },
    infoToastContainer: {
        backgroundColor: '#E6E6E6',
    },
    warningToastContainer: {
        backgroundColor: '#E6E6E6',
    },
    errorToastContainer: {
        backgroundColor: '#E6E6E6',
    }
})