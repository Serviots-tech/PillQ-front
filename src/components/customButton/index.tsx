import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { BouncingCircles } from '../../constants/svgs';

export default function CustomButton({
  viewStyle,
  label,
  buttonTextStyle,
  onPress,
  isLoading = false,
  isDisabled = false,
  icon
}: {
  viewStyle?: any;
  label: any;
  buttonTextStyle?: any;
  onPress: any;
  icon?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
}) {
  return (
    <TouchableOpacity
      onPress={isDisabled ? null : onPress}
      style={[
        viewStyle,
        {
          opacity: isDisabled ? 0.5 : 1, 
        },
      ]}
      disabled={isDisabled} 
    >
      {isLoading ? (
        <View style={{ alignItems: 'center' , marginStart : -20}}>
          <BouncingCircles />
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: icon ? 'flex-start' : 'center',
          }}
        >
          {icon && <View>{icon}</View>}
          <Text style={[buttonTextStyle, { fontWeight: '600' }]}>{'  '}{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
