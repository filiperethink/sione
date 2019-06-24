import React, { Component, Fragment } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, Animated
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Redux
import { connect } from 'react-redux';
import { getUserById } from '../../../api';
// Components
import { Loading, HeaderSvg } from '../../../components';

// Styles
import { styles } from './HomeScreenStyle';
import { Slide } from '../components';

class Home extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false,
      currentUser: {},
    };
  }

  componentDidMount = async () => {
    const { currentUser } = this.state;
    const { currentUser: loggedUser, isLoading } = this.props;
    this.setState({
      isLoading: true,
    });

    const userId = await await AsyncStorage.getItem('@sione/userId');
    const storedUser = await getUserById(userId);
    const fetchedUser = {
      firstName: storedUser[0].firstName,
      lastName: storedUser[0].lastName,
      email: storedUser[0].email,
      id: userId,
      avatarUrl: storedUser[0].avatarUrl,
    };
    if (!currentUser.id) {
      this.setState({
        currentUser: fetchedUser,
        isLoading,
      });
    } else {
      this.setState({
        currentUser: loggedUser,
        isLoading,
      });
    }
    this.close();
  };

  _onLoad = () => {};

  renderBalance = () => (
    <View style={styles.balanceWrapper}>
      <Text style={styles.balanceText}>Seu balanço atual é:</Text>
      <View style={styles.balanceValuesWrapper}>
        <Text style={styles.balanceMoney}>R$</Text>
        <Text style={styles.balanceValue}>7.500,00</Text>
      </View>
    </View>
  );

  renderHeader = currentUser => (
    <Fragment>
      <HeaderSvg />
      <View style={styles.wrapperHeader}>
        <View style={styles.headerInner}>
          <Image
            onLoadEnd={this._onLoad}
            style={styles.userAvatar}
            source={{ uri: currentUser.avatarUrl, cache: 'force-cache' }}
          />
          <View style={styles.welcomeWrapper}>
            <Text style={styles.welcomeText}>Bem vindo,</Text>
            <Text style={styles.userFirstName}>
              {`${currentUser.firstName} ${currentUser.lastName}`}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => null} style={styles.calendarChoose}>
          <Text style={styles.calendarText}>MAIO</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );

  handleLeftSwipe = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 150],
      outputRange: [35, 1],
      extrapolate: 'clamp',
    });

    const opt = dragX.interpolate({
      inputRange: [0.2, 150],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.leftStyles, { opacity: opt }]}>
        <Animated.Text
          style={[
            styles.leftTextStyles,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          NOVA DESPESA
        </Animated.Text>
      </Animated.View>
    );
  };

  openLeftSwipe = () => {
    const { navigation } = this.props;
    this.close();
    navigation.navigate('AddBills');
  };

  openRightSwipe = () => {
    const { navigation } = this.props;
    this.close();
    navigation.navigate('Charts');
  };

  updateRef = ref => {
    this._swipeableRow = ref;
  };

  close = () => {
    this._swipeableRow.close();
  };

  handleSwiper = () => (
    <View style={styles.containerSwiper}>
      <Swipeable
        ref={this.updateRef}
        containerStyle={styles.swipeable}
        renderLeftActions={this.handleLeftSwipe}
        onSwipeableLeftOpen={this.openLeftSwipe}
        onSwipeableRightOpen={this.openRightSwipe}
        renderRightActions={this.handleRightSwipe}
        rightThreshold={100}
        leftThreshold={100}
      >
        <View style={styles.childSwiper}>
          <Text style={styles.textSwiper}> Deslize </Text>
        </View>
      </Swipeable>
    </View>
  );

  handleRightSwipe(progress, dragX) {
    const opt = dragX.interpolate({
      inputRange: [-150, 1],
      outputRange: [1, 0.2],
      extrapolate: 'clamp',
    });

    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, -35],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={[styles.rightStyles, { opacity: opt }]}>
        <Animated.Text
          style={[
            styles.rightTextStyles,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          NOVA DESPESA
        </Animated.Text>
      </Animated.View>
    );
  }

  render() {
    const { currentUser, isLoading } = this.state;
    const detailsSlide = [
      { text: 'Suas Rendas', value: '8.250,00', id: 'profit' },
      { text: 'Seus Débitos', value: '750,00', id: 'debit' },
      { text: 'Seus Investimentos', value: '1.280,00', id: 'invest' },
    ];
    return (
      <Fragment>
        {isLoading || !currentUser.id ? (
          <Loading isVisible={isLoading || !currentUser.id} />
        ) : (
          <Fragment>
            <View style={styles.wrapperHome}>
              {this.renderHeader(currentUser)}
              {this.renderBalance()}
              <Slide data={detailsSlide} />
              {this.handleSwiper()}
            </View>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

Home.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.loginState.loggedUser,
  isLoading: state.loginState.isLoading,
  error: state.loginState.error,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
