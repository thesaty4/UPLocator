import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {router} from './src/shared/routes/router';
import AuthRedirect from './src/shared/routes/AuthRedirect';
import Home from './src/pages/home/Home';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0)" translucent />
      <Stack.Navigator initialRouteName={router.validator.route}>
        <Stack.Screen
          name={router.validator.route}
          options={{headerShown: false}}
          component={AuthRedirect}
        />
        <Stack.Screen
          name={router.home.route}
          options={{headerShown: false}}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
