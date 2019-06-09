import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import PropTypes from "prop-types";
import { SafeAreaView, Text } from "react-native";

// Styles
import { styles } from "./HomeScreenStyle";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  state = {};

  componentDidMount = () => {
    SplashScreen.hide();
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
        <Text>Home</Text>
      </SafeAreaView>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
