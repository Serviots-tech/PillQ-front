import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';


export default function CustomButton({
  viewStyle,
  label,
  buttonTextStyle,
  onPress,
  isIcon=false
}: {
  viewStyle?: any;
  label: any;
  buttonTextStyle?: any;
  onPress: any;
  isIcon?:boolean
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={viewStyle}
    >
      {isIcon  && (
        <Icon name={label} />
      )}
      <Text style={buttonTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
