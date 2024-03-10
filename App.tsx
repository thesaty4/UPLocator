/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import InputField from './src/shared/components/form/input/InputField';
import {useForm} from 'react-hook-form';
import {getStyles} from './src/shared/utils/modifiers';
import LinearGradient from 'react-native-linear-gradient';
import {appColors} from './src/constants/app.color';
import Header from './src/shared/view/header/Header';
import Button from './src/shared/components/form/button/Button';

function App(): React.JSX.Element {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <LinearGradient
      colors={[appColors.primary, appColors.secondary]}
      {...getStyles(['flex1', 'alignCenter', 'justifyCenter'])}>
      <View>
        <Header heading="Sign In" />
        <InputField
          name="name"
          type="email"
          placeholder="Enter Email"
          rule={{required: true}}
          control={control}
          errors={errors}
        />

        <InputField
          name="name"
          type="email"
          placeholder="Enter Password"
          rule={{required: true}}
          control={control}
          errors={errors}
        />

        <Button label="Sign In" onPress={() => {}} />
      </View>
    </LinearGradient>
  );
}

export default App;
