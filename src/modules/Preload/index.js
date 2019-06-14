import React, { Component, Fragment } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from "react-native-splash-screen";
import firebase from "react-native-firebase";
import Theme from "../../theme";

class Preload extends Component {
  componentDidMount = async () => {
    SplashScreen.hide();
    await this._bootStrap();
  };

  _bootStrap = async () => {
    const { navigation } = this.props;
    Theme.initTheme();
    const userToken = await AsyncStorage.getItem("@sione/userToken");
    if (userToken) {
      navigation.navigate("App");
    } else {
      navigation.navigate("Auth");
    }
  };
  render() {
    return <Fragment />;
  }
}

export default Preload;
