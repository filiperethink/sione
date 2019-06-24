import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Store
import store from '~/store/store';

// Modules
import HomeScreen from '~/modules/Home/screens/HomeScreen';
import LoginScreen from '~/modules/Login/screens/LoginScreen';
import Preload from '~/modules/Preload';

import BillsScreen from '~/modules/Bills/screens/BillsScreen';
import AddBillScreen from '~/modules/AddBills/screens/AddBillsScreen';
import ChartsScreen from '~/modules/Charts/screens/ChartsScreen';

const AuthStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: { visible: false },
    },
  },
);

const Drawer = createDrawerNavigator({
  BillsScreen: {
    screen: BillsScreen,
    navigationOptions: {
      drawerLabel: 'BillsScreen',
    },
  },

  AddBillScreen: {
    screen: AddBillScreen,
    navigationOptions: {
      drawerLabel: 'AddBillScreen',
    },
  },

  ChartsScreen: {
    screen: ChartsScreen,
    navigationOptions: {
      drawerLabel: 'ChartsScreen',
    },
  },
});

const AppStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    Drawer,
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: { visible: false },
      gesturesEnabled: true,
      gestureDirection: 'default',
    },
  },
);

export const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Preload,
      AuthStack,
      AppStack,
    },
    {
      initialRouteName: 'Preload',
    },
  ),
);

class App extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
