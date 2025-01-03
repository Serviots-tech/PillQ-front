import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Svg,{ Circle, Path  } from 'react-native-svg';

export const BackIcon = () => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <Path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#3F4946" />
  </Svg>
);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const BouncingCircles = () => {
  const cy1 = new Animated.Value(65);
  const cy2 = new Animated.Value(65);
  const cy3 = new Animated.Value(65);

  useEffect(() => {
    const animateCircles = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(cy1, {
            toValue: 135,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(cy1, {
            toValue: 65,
            duration: 1000,
            useNativeDriver: false,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(cy2, {
            toValue: 135,
            duration: 1000,
            delay: 200, // Delay for the second circle
            useNativeDriver: false,
          }),
          Animated.timing(cy2, {
            toValue: 65,
            duration: 1000,
            useNativeDriver: false,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(cy3, {
            toValue: 135,
            duration: 1000,
            delay: 400, // Delay for the third circle
            useNativeDriver: false,
          }),
          Animated.timing(cy3, {
            toValue: 65,
            duration: 1000,
            useNativeDriver: false,
          }),
        ])
      ).start();
    };

    animateCircles();
  }, []);

  return (
    <View>
      <Svg width="100" height="100" viewBox="0 0 80 400">
        <AnimatedCircle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="15"
          r="15"
          cx="40"
          cy={cy1}
        />
        <AnimatedCircle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="15"
          r="15"
          cx="100"
          cy={cy2}
        />
        <AnimatedCircle
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="15"
          r="15"
          cx="160"
          cy={cy3}
        />
      </Svg>
    </View>
  );
};