import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { styles } from './ChartsScreenStyle';

class Charts extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>Charts</Text>
      </View>
    );
  }
}

Charts.defaultProps = { };

Charts.propTypes = { };

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(Charts);
