import React, { Component } from "react";
import PropTypes from "prop-types";
import { SafeAreaView, Text } from "react-native";

// Styles
import { styles } from "./LoadingStyle";

class Loading extends Component {
  render() {
    const { text } = this.props;
    return (
      <SafeAreaView style={styles.loadingWrapper}>
        <Text style={styles.loadingText}>{text}</Text>
      </SafeAreaView>
    );
  }
}

Loading.defaultProps = {
  text: "Carregando..."
};

Loading.propTypes = {
  text: PropTypes.string
};

export default Loading;
