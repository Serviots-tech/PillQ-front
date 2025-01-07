// App.jsx
import { Animated, Text, View } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Tick } from '../../constants/svgs';
import { useEffect, useRef } from 'react';


export const CustomToast = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  // success: (props: any) => (

  //   <BaseToast
  //     {...props}
  //     style={{ borderLeftColor: '#BDF2D3', backgroundColor: '#BDF2D3',borderBottomColor:"#44D688" }}
  //     contentContainerStyle={{ paddingHorizontal: 15 }}
  //     text1Style={{
  //       fontSize: 15,
  //       fontWeight: '400'
  //     }}
  //     renderLeadingIcon={() => (
  //       <View style={{ justifyContent: 'center', alignItems: 'center', paddingStart:5 }}>
  //         <Tick />
  //       </View>
  //     )}
  //   />
  // ),
  
  success: (props: any) => {
    const progressWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      // Start the animation when the toast appears
      Animated.timing(progressWidth, {
        toValue: 100,
        duration: 3000, // Set your toast duration here (3 seconds in this case)
        useNativeDriver: false,
      }).start();

      // Optionally, stop the animation or reset it when the toast disappears
      return () => progressWidth.setValue(0); // Reset when unmounted
    }, [progressWidth]);

    // Use the interpolate function to convert progressWidth into a valid width percentage
    const animatedWidth = progressWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'], // interpolate from 0% to 100% for the width
    });

    return (
      <BaseToast
        {...props}
        style={{
          backgroundColor: '#BDF2D3',
          borderLeftColor: '#BDF2D3',
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
        renderLeadingIcon={() => (
          <View style={{ justifyContent: 'center', alignItems: 'center', paddingStart: 5 }}>
            <Tick />
          </View>
        )}
      >
        {/* Animated bottom border */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 2,
            width: animatedWidth, // This will be interpolated from 0% to 100%
            backgroundColor: '#44D688', // The color of the progress bar (bottom border)
          }}
        />
      </BaseToast>
    );
  },
  
  
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  // tomatoToast: ({ text1, props }: any) => (
  //   <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
  //     <Text>{text1}</Text>
  //     <Text>{props.uuid}</Text>
  //   </View>
  // )
  tomatoToast: ({ text1, props }: any) => {
    const progressWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      // Start the animation when the toast appears
      Animated.timing(progressWidth, {
        toValue: 100,
        duration: 3000, // Set your toast duration here (3 seconds in this case)
        useNativeDriver: false,
      }).start();

      // Optionally, stop the animation or reset it when the toast disappears
      return () => progressWidth.setValue(0); // Reset when unmounted
    }, [progressWidth]);

    // Interpolate the animated value to a valid width (from 0% to 100%)
    const animatedWidth = progressWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'], // animate from 0% to 100% width
    });

    return (
      <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>

        {/* Animated bottom border */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 6,
            width: animatedWidth, // Apply the animated width for progress
            backgroundColor: '#44D688', // Color of the progress (bottom border)
          }}
        />
      </View>
    );
  },
};

// /*
//   2. Pass the config as prop to the Toast component instance
// */
// export function App(props) {
//   return (
//     <>
//       {...}
//       <Toast config={toastConfig} />
//     </>
//   );
// }