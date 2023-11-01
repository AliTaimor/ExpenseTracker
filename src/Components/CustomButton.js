import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {CustomButtonStyling} from '../Assets/Styles';
const CustomButton = ({
  buttonContainer,
  textStyle,
  onPress,
  buttonLabel,
  buttonColor,
  addIcon,
  addIconTwo,
  buttonWidth,
  buttonHeight,
  labelStyle,
  buttonMargin,
  children,
}) => {
  const separatorWidth = addIcon && addIconTwo ? 40 : 0;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        CustomButtonStyling.buttonCreate,
        buttonContainer,
        {
          backgroundColor: buttonColor,
          width: buttonWidth,
          height: buttonHeight,
          marginBottom: buttonMargin,
        },
      ]}>
      {children}
      <View style={CustomButtonStyling.iconContainer}>
        <View style={CustomButtonStyling.incomeIcon}>
          <View>{addIcon}</View>
        </View>
        <View
          style={[CustomButtonStyling.iconSeparator, {width: separatorWidth}]}
        />
        <View>
          <View>{addIconTwo}</View>
        </View>
      </View>

      <Text style={[textStyle, labelStyle]}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
