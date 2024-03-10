import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-tailwindcss';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
 
const AppWithProviders = () => (
    <Provider store={store}>
       <App /> 
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithProviders);
