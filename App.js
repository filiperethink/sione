import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

// Modules
import HomeScreen from "app_sione/modules/Home/screens/HomeScreen";
import LoginScreen from "app_sione/modules/Login/screens/LoginScreen";
import AuthScreen from "app_sione/modules/Auth/screens/AuthScreen";

console.disableYellowBox = true;
const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});
const AuthStack = createStackNavigator({
  SignIn: {
    screen: LoginScreen
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
