
YellowBox.ignoreWarnings([
  'Stream Closed',
  'Warning: ',
  'Error: ',
  'RNFetchBlob error when sending request : timeout',
  'Error: Network Error',
  'Error: Unexpected end of stream',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: CheckBox has been extracted from react-native core',

]);
import { Text, StyleSheet, YellowBox, AppRegistry } from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList, faThLarge, faMapMarkerAlt, faBell } from '@fortawesome/free-solid-svg-icons'
import PostScreen from './src/screens/PostScreen'
import LocationScreen from './src/screens/LocationScreen'
import AddScreen from './src/screens/AddScreen'
import More from './src/screens/More'
import Posts from './src/components/Posts';
import ViewPosts from './src/screens/ViewPosts'
import Event from './src/post/Event'

import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';


const tab =createMaterialBottomTabNavigator({
  Home: {
    screen: ViewPosts,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon={ faClipboardList }  size={25} />

      )
    }
  },
  
  Location: {
    screen: LocationScreen,
    navigationOptions: {
      tabBarLabel: 'Location',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesomeIcon icon={ faMapMarkerAlt }  size={25} />
      )
    }
  }
},
    {
  initialRouteName: 'Home',
  order: ['Home','Location'],
  shifting: true
});

 const styles = {
   
  textStyle: {
    alignSelf: 'center',
    flex:1,
    justifyContent: 'center'
  }
};
const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: tab,
    navigationOptions: {
        title: 'Main',
        drawerLabel: 'Main'
      }
  },
  Posts: {
    screen: PostScreen,
     navigationOptions: {
        title: 'My Posts',
        drawerLabel: 'My Post'
      }
  },
   Logout: {
    screen: More,
     navigationOptions: {
        drawerLockMode: 'locked-closed',
        title: 'SignOut',
        drawerLabel: 'SignOut'
      }
  }
})
const AppSwitchNavigator =createSwitchNavigator({
  Home: { screen: AppDrawerNavigator },
  Dashboard: { screen: tab }
});
const AppContainer = createAppContainer(AppSwitchNavigator);

class App extends Component {
  render(){
    return (
          <AppContainer />
       );
  }
}
export default App;