import React, { Component, Fragment } from "react";
import firebase from "react-native-firebase";
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from "react-native-splash-screen";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Animated, Easing, Dimensions, Platform } from "react-native";

import { Form } from "../components/Form";

// Images
import images from "../../../assets/images";
// Styles
import { styles } from "./LoginScreenStyle";

const { illustrations } = images;

const opacityText = new Animated.Value(0);
const moveDraw = new Animated.Value(-20);
class Login extends Component {
  static navigationOptions = {
    header: null
  };
  state = {};

  componentDidMount = async () => {
    SplashScreen.hide();
    Animated.parallel([
      Animated.timing(moveDraw, {
        toValue: 0,
        duration: 700,
        easing: Easing.linear
      }),

      Animated.timing(opacityText, {
        toValue: 1,
        duration: 700,
        easing: Easing.ease
      })
    ]).start();
  };

  handleSubmitLogin = async values => {
    const { navigation } = this.props;
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);

      if (user.uid) {
        await AsyncStorage.setItem("@tokenUser", user.uid);
        navigation.navigate("App");
      }
    } catch (error) {
      console.log({ error });
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.wrapperLogin}
        // scrollEnabled={false}
      >
        <Fragment>
          <Animated.Text
            style={[styles.loginTitle, { opacity: opacityText, top: moveDraw }]}
          >
            LOGIN
          </Animated.Text>
          <Animated.Image
            style={[styles.loginDraw, { opacity: opacityText, top: moveDraw }]}
            source={illustrations.login}
          />
          <Animated.Text
            style={[
              styles.loginHeadline,
              { opacity: opacityText, top: moveDraw }
            ]}
          >
            O Jeito mais fácil de controlar suas contas
          </Animated.Text>
          <Form onSubmit={this.handleSubmitLogin} />
        </Fragment>
      </KeyboardAwareScrollView>
    );
  }
}

Login.defaultProps = {};

Login.propTypes = {};

const mapStateToProps = state => ({});

export default Login;
