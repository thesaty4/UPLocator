import React from 'react';
import {Text, TouchableOpacity, Image, ImageURISource} from 'react-native';
import {getStyles} from '../../../utils/modifiers';
import {appColors} from '../../../../constants/app.color';

type ButtonProps = {
  label: string;
  icon?: ImageURISource;
  onPress: () => void;
} & React.ComponentProps<typeof TouchableOpacity>;

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onPress,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      {...getStyles(['pY3'], 'field', {
        backgroundColor: appColors.white,
        opacity: 0.7,
        elevation: 1,
        ...(typeof restProps?.style === 'object' ? restProps.style : {}),
      })}
      onPress={onPress}>
      <Text
        {...getStyles([
          'textCenter',
          'textBlack',
          'fontBold',
          'alignCenter',
          'justifyCenter',
          'itemsCenter',
        ])}>
        {label}
        {icon && <Image source={icon} style={{height: 15, width: 15}} />}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
