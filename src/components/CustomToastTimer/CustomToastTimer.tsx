import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated';
import { imagePaths } from '../../constants/imagePath';

interface ToastProps { }

export interface ToastConfig {
    type: 'success' | 'info' | 'error',
    text: string,
    duration: number
}

export interface ToastRef {
    show: (config: ToastConfig) => void;
}

const CustomToastTimer = forwardRef<ToastRef, ToastProps>(({ }, ref) => {
    const toastBottomAnimation = useSharedValue(-100); // Start below the screen
    const scaleAnimation = useSharedValue(0.9);
    const iconScaleAnimation = useSharedValue(1);
    const progressBarAnimation = useSharedValue(1);

    const context = useSharedValue(0)
    const [showing, setShowing] = useState(false)
    const [toastConfig, setToastConfig] = useState<ToastConfig>({
        type: "success",
        text: '',
        duration: 0
    })

    const BOTTOM_VALUE = 160;

    useImperativeHandle(ref, () => ({ show }), [])

    const show = useCallback(({ duration, type, text }: ToastConfig) => {
        setShowing(true);
        setToastConfig({ text, type, duration });

        progressBarAnimation.value = withTiming(0, { duration: 0 }); // Reset to start
        progressBarAnimation.value = withTiming(1, { duration });    // Animate to end

        scaleAnimation.value = withTiming(1, { duration: 100 });
        iconScaleAnimation.value = withSequence(
            withTiming(1.1, { duration: 100 }),
            withTiming(1, { duration: 100 })
        );

        toastBottomAnimation.value = withSequence(
            withTiming(BOTTOM_VALUE, { duration: 500 }),
            withDelay(
                duration,
                withTiming(-100, { duration: 500 }, finish => {
                    if (finish) runOnJS(setShowing)(false);
                })
            )
        );
    }, []);


    const animatedTopStyles = useAnimatedStyle(() => ({
        bottom: toastBottomAnimation.value,
        transform: [{ scale: scaleAnimation.value }],
        opacity: showing ? 1 : 0
    }))

    const animatedIconStyles = useAnimatedStyle(() => ({
        transform: [{ scale: iconScaleAnimation.value }],
    }))

    const animatedProgressBarStyles = useAnimatedStyle(() => ({
        width: `${progressBarAnimation.value * 107.5}%`, // Dynamic width animation
    }));
    
    const panGesture = Gesture.Pan()
        .onBegin(() => {
            context.value = toastBottomAnimation.value
        }).onUpdate((event) => {
            if (event.translationY < 100) {
                toastBottomAnimation.value = withSpring(
                    context.value + event.translationY,
                    {
                        duration: 600,
                        stiffness: 100
                    }
                )
            }
        }).onEnd((event) => {
            const isSwipeUp = event.translationY < 0;
            const newPostion = isSwipeUp ? -100 : BOTTOM_VALUE;
            toastBottomAnimation.value = withTiming(
                newPostion,
                { duration: 500 },
                finish => {
                    if (finish && isSwipeUp) runOnJS(setShowing)(false)
                }
            )
        });

    const getToastStyle = useMemo(() => {
        switch (toastConfig.type) {
            case 'success':
                return {
                    container: [style.toastContainer, style.successToastContainer, {borderBottomColor: '#44D688'}],
                    text: style.successToastText,
                    progressBar: style.successProgressBar
                }
            case 'info':
                return {
                    container: [style.toastContainer, style.infoToastContainer,{borderBottomColor: '#001D40'}],
                    text: style.infoToastText,
                    progressBar: style.infoProgressBar
                }
            case 'error':
                return {
                    container: [style.toastContainer, style.errorToastContainer,{borderBottomColor: '#E06664'}],
                    text: style.errorToastText,
                    progressBar: style.errorProgressBar
                }
            default:
                return {
                    container: [style.toastContainer, style.successToastContainer],
                    text: style.successToastText,
                    progressBar: style.successProgressBar
                }
        }
    }, [toastConfig.type])

    const { container, text, progressBar } = getToastStyle

    return (
        showing ? <GestureDetector gesture={panGesture}>
            <Animated.View style={[container, animatedTopStyles]}>
                <Animated.Image
                    source={
                        toastConfig.type === 'success' ? imagePaths?.chechked :
                            toastConfig.type === 'info' ? imagePaths?.info :
                                imagePaths?.error
                    }
                    style={[style?.toastIcon, animatedIconStyles]}
                />
                <Text style={[style.toastText, text]}>{toastConfig.text}</Text>
                <TouchableOpacity style={style.closeButton}
                    onPress={() => setShowing(false)}
                >
                    <Image
                        source={imagePaths.close}
                        style={style.close}
                    />
                </TouchableOpacity>
                <Animated.View style={[style.progress_bar, progressBar, animatedProgressBarStyles]} />
            </Animated.View>
        </GestureDetector> : null
    )
});

export default CustomToastTimer

const style = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        bottom: 10,
        width: '80%',
        padding: 12,
        borderRadius: 4,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderBottomWidth: 4, // Thickness of the bottom border
        borderBottomColor: '#1f8722',
    },
    toastText: {
        marginLeft: 14,
        fontSize: 16,
        flex: 1,
    },
    toastIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    successToastContainer: {
        backgroundColor: '#def1d7',
        borderColor: '#BDF2D3'
    },
    infoToastContainer: {
        backgroundColor: '#D9EAFF',
        borderColor: '#5E9AE5'
    },
    errorToastContainer: {
        backgroundColor: '#fae1db',
        borderColor: '#FCC1C0'
    },
    successToastText: {
        color: '#00381A'
    },
    infoToastText: {
        color: '#001D40'
    },
    errorToastText: {
        color: '#580B0A'
    },
    progress_bar: {
        position: 'absolute',
        bottom: -4,
        left: 0.3,
        height: 4,
        backgroundColor: '#1f8722', // Default color for success
        width: 0,
        borderRadius:100 // Initial width
    },
    closeButton: {
        marginLeft: 10,
        padding: 3
    },
    close: {
        tintColor: '#888',
        height: 10,
        width: 10
    },
    successProgressBar: {
        backgroundColor: '#00381A'
    },
    infoProgressBar: {
        backgroundColor: '#001D40'
    },
    errorProgressBar: {
        backgroundColor: '#580B0A'
    },
})