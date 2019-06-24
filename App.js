import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

// Modules
import Theme from '~/theme';

// Navigation
import { Nav } from '~/router';

// Store
import store from './src/store/store';

// eslint-disable-next-line no-console
console.disableYellowBox = true;

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
