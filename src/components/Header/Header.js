import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image
} from 'react-native';

// Styles
import { styles } from './HeaderStyle';
import { HeaderSvg } from '~/components';

class Header extends Component {
  state = {};

  render() {
    const { currentUser } = this.props;
    const fullName = `${currentUser.firstName} ${currentUser.lastName}`;
    const welcomeText = 'Bem vindo,';
    return (
      <Fragment>
        <HeaderSvg />
        <View style={styles.wrapperHeader}>
          <View style={styles.headerInner}>
            <Image
              style={styles.wrapperAvatar}
              source={{ uri: currentUser.avatarUrl, cache: 'reload', scale: 2 }}
            />
            <View style={styles.welcomeWrapper}>
              <Text style={styles.welcomeText}>
                {welcomeText.toUpperCase()}
              </Text>
              <Text style={styles.userFirstName}>{fullName.toUpperCase()}</Text>
            </View>
          </View>
          {/* <TouchableOpacity onPress={() => null} style={styles.calendarChoose}>
            <Text style={styles.calendarText}>MAIO</Text>
          </TouchableOpacity> */}
        </View>
      </Fragment>
    );
  }
}

Header.defaultProps = {};

Header.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
