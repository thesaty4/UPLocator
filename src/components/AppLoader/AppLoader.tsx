import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from '../../constants/app.color';
import {getStyles} from '../../shared/utils/modifiers';
import {Text, View} from 'react-native';

const AppLoader = () => {
  return (
    <LinearGradient
      colors={[appColors.primary, appColors.secondary]}
      {...getStyles(['flex1', 'alignCenter', 'justifyCenter'])}>
      <View>
        <Text
          {...getStyles([
            'textCenter',
            'text2xl',
            'fontBold',
            'textWhite',
            'opacity75',
          ])}>
          WELCOME TO UPL
        </Text>
        <Text
          {...getStyles([
            'textCenter',
            'fontBold',
            'textGray100',
            'opacity50',
          ])}>
          App is preparing..
        </Text>
      </View>
    </LinearGradient>
  );
};

export default AppLoader;
