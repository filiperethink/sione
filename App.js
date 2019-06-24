import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

// Modules
import HomeScreen from '~/modules/Home/screens/HomeScreen';
import LoginScreen from '~/modules/Login/screens/LoginScreen';
import Preload from '~/modules/Preload';
import Theme from '~/theme';
// Store
import store from './src/store/store';

// eslint-disable-next-line no-console
console.disableYellowBox = true;
const AppStack = createStackNavigator({
  Home: HomeScreen,
});
const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
  },
  {
    cardStyle: {
      backgroundColor: 'tomato',
    },
  },
);

export const Nav = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

Theme.initTheme();

export default class App extends Component {
  state = {};

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
