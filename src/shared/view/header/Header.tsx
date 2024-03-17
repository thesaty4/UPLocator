import React from 'react';
import {
  View,
  Text,
  Image,
  ImageURISource,
  TouchableOpacity,
} from 'react-native';
import {getStyles} from '../../utils/modifiers';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from '../../../constants/app.color';
import {Icons} from '../../../assets/icons/all-icons';
import {commonStyles} from '../../../constants/styles.const';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  heading?: string;
  icon?: ImageURISource;
  isGradient?: boolean;
  isBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  heading = 'Heading',
  icon,
  isGradient = false,
  isBack = false,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    console.log('back me...');
    navigation.goBack();
  };

  const Back = ({onPress}: {onPress: () => void}) =>
    isBack ? (
      <View>
        <TouchableOpacity onPress={onPress} {...getStyles(['pX5', 'pT2'])}>
          <Image
            source={Icons.backArrow}
            style={{
              width: 20,
              height: 20,
              tintColor: appColors.white,
            }}
          />
        </TouchableOpacity>
      </View>
    ) : (
      <></>
    );

  return (
    <View>
      {!isGradient ? (
        <View>
          <Back onPress={handleBack} />
          {icon && <Image source={icon} />}
          <Text {...getStyles([], 'header')}>{heading}</Text>
        </View>
      ) : (
        <LinearGradient
          colors={[appColors.primary, appColors.secondary]}
          {...getStyles(['flexRow'])}>
          <Back onPress={handleBack} />
          <View
            {...getStyles(
              ['flex1', 'flexRow', 'justifyCenter', 'alignCenter', 'pB3'],
              'default',
              {gap: 5, marginRight: isBack ? 50 : 0},
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
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default Header;
