import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-tailwindcss'; // Import Tailwind CSS
import {store} from './src/redux/store';
import {Provider} from 'react-redux'; // Import Provider
import Loader from './src/components/Loader/Loader';
import NotificationMessage from './src/components/Notification/NotificationMessage';

const AppWithProviders = () => (
  <Provider store={store}>
    <App />
    <Loader />
    <NotificationMessage />
  </Provider>
);

// Use AppWithProviders in registerComponent
AppRegistry.registerComponent(appName, () => AppWithProviders);
