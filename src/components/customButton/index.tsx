import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import CustomImage from '../customImage';
import { imagePaths } from '../../constants/imagePath';
import { horizontalScale, moderateScale } from '../../styles';

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
        <View style={{ alignItems: 'center',
        justifyContent:'center'}}>
          <CustomImage imageUrl={imagePaths?.loader} style={{
            width: horizontalScale(50),
            height: moderateScale(50),
          }} />
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
            <Text style={[buttonTextStyle, { fontWeight: '600' }]} >{'  '}{label != "Reset Password" ? label.length > 10 ? label.substring(0, 5) + '...' : label  : label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
