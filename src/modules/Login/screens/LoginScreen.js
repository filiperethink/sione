import React, { Component, Fragment } from "react";

import SplashScreen from "react-native-splash-screen";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Animated, Easing, Text, View } from "react-native";

import { Form } from "../components/Form";

// Redux
import { connect } from "react-redux";
// Actions
import { onLogin } from "../actions";

// Styles
import { styles } from "./LoginScreenStyle";

// Images
import images from "../../../assets/images";
import { Loading } from "../../../components";
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
    this.handleInitialAnimation();
  };

  handleInitialAnimation = () => {
    Animated.parallel([
      Animated.timing(moveDraw, {
        toValue: 0,
        duration: 700,
        easing: Easing.linear
      }),

      Animated.timing(opacityText, {
        toValue: 1,
        duration: 400,
        easing: Easing.linear
      })
    ]).start();
  };
  handleSubmitLogin = async values => {
    const { navigation, handleLogin } = this.props;
    const res = await handleLogin(values.email, values.password);
    if (res.status) {
      navigation.navigate("App");
    }
  };

  render() {
    const { isLoading } = this.props;
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
          {!isLoading ? (
            <Form onSubmit={this.handleSubmitLogin} />
          ) : (
            <Loading />
          )}
        </Fragment>
      </KeyboardAwareScrollView>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.loginState.isLoading
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (email, password) => dispatch(onLogin(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
