import React, { Component } from "react";
import firebase from "react-native-firebase";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { SafeAreaView, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";
// Styles
import { styles } from "./LoginScreenStyle";

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  state = {};

  componentDidMount = async () => {
    SplashScreen.hide();
    try {
      const loginUser = {
        email: "filipe.prado@rethink.dev",
        password: "senha123"
      };
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(loginUser.email, loginUser.password);

      const token = await firebase.auth().currentUser.getIdToken();
      if (token) {
        await AsyncStorage.setItem("@tokenUser", token);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f8b525",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Faça Login</Text>
      </SafeAreaView>
    );
  }
}

Login.defaultProps = {};

Login.propTypes = {};

const mapStateToProps = state => ({});

export default Login;
