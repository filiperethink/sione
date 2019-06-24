import React, { Component, Fragment } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { View, Text, Animated } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Redux
import { connect } from 'react-redux';

// Actions
import { getCurrentUser } from '~/store/reducers/users';
// Components
import { Loading, Header } from '~/components';

// Styles
import { styles } from './HomeScreenStyle';
import { Slide } from '../components';

class Home extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  state = {
    isLoading: false,
    currentUser: {},
  };

  componentDidMount = async () => {
    const { getLoggedUser } = this.props;
    await getLoggedUser();
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      currentUser: nextProps.currentUser,
      isLoading: nextProps.isLoading,
    });
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
    const { isLoading, currentUser } = this.state;
    const detailsSlide = [
      { text: 'Suas Rendas', value: '8.250,00', id: 'profit' },
      { text: 'Seus Débitos', value: '750,00', id: 'debit' },
      { text: 'Seus Investimentos', value: '1.280,00', id: 'invest' },
    ];

    return (
      // ||
      <Fragment>
        <View style={styles.wrapperHome}>
          <Header currentUser={currentUser} />
          {/* {this.renderBalance()} */}
          {/* <Slide data={detailsSlide} /> */}
          {/* {this.handleSwiper()} */}
        </View>
      </Fragment>
    );
  }
}

Home.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  getLoggedUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getLoggedUser: () => dispatch(getCurrentUser()),
});

const mapStateToProps = state => {
  console.log({ state });
  return {
    currentUser: state.userState.loggedUser,
    isLoading: state.userState.isLoading,
    error: state.userState.error,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
