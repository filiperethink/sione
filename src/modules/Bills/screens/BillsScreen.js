import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { styles } from './BillsScreenStyle';

class Bills extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>Bills</Text>
      </View>
    );
  }
}

Bills.defaultProps = { };

Bills.propTypes = { };

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(Bills);
