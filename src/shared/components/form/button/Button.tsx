import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {getStyles} from '../../../utils/modifiers';
import {appColors} from '../../../../constants/app.color';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({label, onPress}) => {
  return (
    <TouchableOpacity
      {...getStyles(['pY3'], 'field', {
        backgroundColor: appColors.white,
        opacity: 0.7,
        elevation: 1,
      })}
      onPress={onPress}>
      <Text {...getStyles(['textCenter', 'textBlack', 'fontBold'])}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
