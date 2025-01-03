import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function CustomButton({
  viewStyle,
  label,
  buttonStyle,
  onPress,
}: {
  viewStyle: any;
  label: string;
  buttonStyle: any;
  onPress: any;
}) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{ width: '100%' }} // Ensure TouchableOpacity is full width
    >
      <View
        style={[
          viewStyle,
          {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', // Ensure View is full width
          },
        ]}
      >
        <Text style={buttonStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
