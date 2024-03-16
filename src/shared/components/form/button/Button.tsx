import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  ImageURISource,
  StyleProp,
  TextStyle,
} from 'react-native';
import {getStyles} from '../../../utils/modifiers';
import {appColors} from '../../../../constants/app.color';

type ButtonProps = {
  label: string;
  icon?: ImageURISource;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  buttonType?: 'primary' | 'secondary' | 'transparent';
} & React.ComponentProps<typeof TouchableOpacity>;

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  textStyle,
  onPress,
  buttonType = 'transparent',
  ...restProps
}) => {
  return (
    <TouchableOpacity
      {...getStyles(['pY3'], 'field', {
        backgroundColor:
          buttonType == 'primary'
            ? appColors.primary
            : buttonType == 'secondary'
            ? appColors.secondary
            : appColors.white,
        opacity: 0.7,
        elevation: 1,
        ...(typeof restProps?.style === 'object' ? restProps.style : {}),
      })}
      onPress={onPress}>
      <Text
        {...getStyles(
          [
            'textCenter',
            'textBlack',
            'fontBold',
            'alignCenter',
            'justifyCenter',
            'itemsCenter',
          ],
          'default',
        )}>
        <Text
          style={[
            textStyle,
            {
              color:
                buttonType == 'primary'
                  ? appColors.white
                  : buttonType == 'secondary'
                  ? appColors.white
                  : appColors.white,
            },
          ]}>
          {label}
        </Text>
        {icon && <Image source={icon} style={{height: 15, width: 15}} />}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
