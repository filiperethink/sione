import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { styles } from './AddBillsScreenStyle';

class AddBills extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>AddBills</Text>
      </View>
    );
  }
}

AddBills.defaultProps = { };

AddBills.propTypes = { };

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(AddBills);
