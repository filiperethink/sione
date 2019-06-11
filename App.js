import React, { Component, Fragment } from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

// Modules
import HomeScreen from "app_sione/modules/Home/screens/HomeScreen";
import LoginScreen from "app_sione/modules/Login/screens/LoginScreen";
import Preload from "./src/modules/Preload";

console.disableYellowBox = true;
const AppStack = createStackNavigator({
  Home: HomeScreen
});
const AuthStack = createStackNavigator({
  SignIn: LoginScreen
});

export default createAppContainer(
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
