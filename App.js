import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

// Modules
import HomeScreen from "app_sione/modules/Home/screens/HomeScreen";
import LoginScreen from "app_sione/modules/Login/screens/LoginScreen";
import Preload from "./src/modules/Preload";

// Store
import store from "./src/store/store";

console.disableYellowBox = true;
const AppStack = createStackNavigator({
  Home: HomeScreen
});
const AuthStack = createStackNavigator({
  SignIn: LoginScreen
});

export const Nav = createAppContainer(
  createSwitchNavigator(
    {
      Preload: Preload,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Preload"
    }
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}
