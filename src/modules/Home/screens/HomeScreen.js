import React, { Component } from "react";
import PropTypes from "prop-types";
import { SafeAreaView, Text } from "react-native";

// Styles
import { styles } from "./HomeScreenStyle";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  state = {};

  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
