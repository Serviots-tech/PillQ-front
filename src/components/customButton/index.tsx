import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { BackIcon, BouncingCircles } from '../../constants/svgs';

export default function CustomButton({
  viewStyle,
  label,
  buttonTextStyle,
  onPress,
  isIcon = false,
  isLoading = false,
  isDisabled = false,
}: {
  viewStyle?: any;
  label: any;
  buttonTextStyle?: any;
  onPress: any;
  isIcon?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={isDisabled ? null : onPress}
      style={[
        viewStyle,
        {
          opacity: isDisabled ? 0.5 : 1, // Reduce opacity when disabled
        },
      ]}
      disabled={isDisabled} // Disable interaction
    >
      {isLoading ? (
        <View style={{ alignItems: 'center' }}>
          <BouncingCircles />
        </View>
      ) : (
        <>
          {isIcon ? <BackIcon /> : <Text style={buttonTextStyle}>{label}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
}
