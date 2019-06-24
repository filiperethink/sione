import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Styles
import { styles } from './ReportScreenStyle';

class Report extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>Report</Text>
      </View>
    );
  }
}

Report.defaultProps = { };

Report.propTypes = { };

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
)(Report);
