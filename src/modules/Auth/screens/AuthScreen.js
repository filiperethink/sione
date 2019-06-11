import React, { Component, Fragment } from "react";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { SafeAreaView, Text, StatusBar } from "react-native";

import Theme from "../../../theme";

// Styles
import { styles } from "./AuthScreenStyle";

class Auth extends Component {
  static navigationOptions = {
    header: null
  };

  state = {};

  componentDidMount = async () => {
    const { navigation } = this.props;
    SplashScreen.hide();
    Theme.initTheme();
    navigation.navigate("Auth");
    // await this._bootstrapAsync();
  };

  // _bootstrapAsync = async () => {
  //   const { navigation } = this.props;
  //   const userToken = await AsyncStorage.getItem("@tokenUser");
  //   navigation.navigate("Auth");
  // };

  render() {
    return <Fragment />;
  }
}

Auth.defaultProps = {};

Auth.propTypes = {};

export default Auth;
