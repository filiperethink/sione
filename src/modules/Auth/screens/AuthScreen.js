import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { SafeAreaView, Text } from "react-native";

// Styles
import { styles } from "./AuthScreenStyle";

class Auth extends Component {
  static navigationOptions = {
    header: null
  };

  state = {};

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem("@tokenUser");
    console.log({ userToken });

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Auth</Text>
      </SafeAreaView>
    );
  }
}

Auth.defaultProps = {};

Auth.propTypes = {};

export default Auth;
