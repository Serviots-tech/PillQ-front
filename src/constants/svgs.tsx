import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Svg,{ Circle, Path  } from 'react-native-svg';

export const BackIcon = () => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#3F4946" />
  </Svg>
);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatedLoader = () => {
  const opacity1 = useRef(new Animated.Value(1)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;
  const opacity3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateCircle = (opacity: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            delay,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateCircle(opacity1, 0);
    animateCircle(opacity2, 200);
    animateCircle(opacity3, 300);
  }, [opacity1, opacity2, opacity3]);

  return (
    <View style={styles.container}>
      <Svg height={100} width={200} viewBox="0 0 200 100">
        <AnimatedCircle cx="40" cy="50" r="10" fill="#FFFFFF" opacity={opacity1} />
        <AnimatedCircle cx="100" cy="50" r="10" fill="#FFFFFF" opacity={opacity2} />
        <AnimatedCircle cx="160" cy="50" r="10" fill="#FFFFFF" opacity={opacity3} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});