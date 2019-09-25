/**
 * @format
 */
import {AppRegistry} from 'react-native';
import Routes from './Routes';
import Login from './src/screens/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);