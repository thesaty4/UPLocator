import React from 'react';
import {View, Text, Image, ImageURISource} from 'react-native';
import {getStyles} from '../../utils/modifiers';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from '../../../constants/app.color';
import {Icons} from '../../../assets/icons/all-icons';
import {commonStyles} from '../../../constants/styles.const';

interface HeaderProps {
  heading?: string;
  icon?: ImageURISource;
  isGradient?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  heading = 'Heading',
  icon,
  isGradient = false,
}) => {
  return (
    <View>
      {!isGradient ? (
        <View>
          {icon && <Image source={icon} />}
          <Text {...getStyles([], 'header')}>{heading}</Text>
        </View>
      ) : (
        <LinearGradient
          colors={[appColors.primary, appColors.secondary]}
          {...getStyles(
            ['flexRow', 'justifyCenter', 'alignCenter', 'pB3'],
            'default',
            {gap: 5, backgroundColor: appColors.secondary},
          )}>
          <Image
            source={icon ?? Icons.train2}
            style={{
              width: 25,
              height: 25,
              tintColor: appColors.white,
              alignItems: 'center',
              //   backgroundColor: appColors.green,
            }}
          />
          <Text
            {...getStyles(['m1', 'fontBold'], 'default', {
              fontSize: 16,
              color: appColors.white,
              ...commonStyles.textShadowN,
            })}>
            {heading}
          </Text>
        </LinearGradient>
      )}
    </View>
  );
};

export default Header;
