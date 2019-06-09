import React, { Component, Fragment } from "react";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { SafeAreaView, Text, StatusBar } from "react-native";

// Styles
import { styles } from "./AuthScreenStyle";

class Auth extends Component {
  static navigationOptions = {
    header: null
  };

  state = {};

  componentDidMount = async () => {
    await SplashScreen.hide();
    this._bootstrapAsync();
  };

  _bootstrapAsync = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem("@tokenUser");
    navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#f1f1f1",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Auth</Text>
        </SafeAreaView>
      </Fragment>
    );
  }
}

Auth.defaultProps = {};

Auth.propTypes = {};

export default Auth;
