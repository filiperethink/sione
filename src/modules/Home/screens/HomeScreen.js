import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

// Redux
import { connect } from "react-redux";
import { getUserById } from "../../../api";

// Components
import { Loading } from "../../../components";

// Images
import images from "../../../assets/images/index";
const { icons } = images;
// Styles
import { styles } from "./HomeScreenStyle";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    isFetchingUser: false,
    currentUser: {},
    error: {},
    loaded: false
  };

  componentDidMount = async () => {
    const { currentUser } = this.state;
    const { currentUser: loggedUser, isLoading } = this.props;
    this.setState({
      isLoading: true
    });
    const userId = await await AsyncStorage.getItem("@sione/userId");
    const storedUser = await getUserById(userId);
    const fetchedUser = {
      firstName: storedUser[0].firstName,
      lastName: storedUser[0].lastName,
      email: storedUser[0].email,
      id: userId,
      avatarUrl: storedUser[0].avatarUrl
    };
    if (!currentUser.id) {
      this.setState({
        currentUser: fetchedUser,
        isLoading
      });
    } else {
      this.setState({
        currentUser: loggedUser,
        isLoading
      });
    }
  };

  _onLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { currentUser, isLoading } = this.state;
    return (
      <Fragment>
        {isLoading || !currentUser.id ? (
          <Loading />
        ) : (
          <View style={styles.wrapperHome}>
            <View style={styles.wrapperHeader}>
              <Image
                onLoadEnd={this._onLoad}
                style={styles.userAvatar}
                source={{ uri: currentUser.avatarUrl, cache: "force-cache" }}
              />

              <TouchableOpacity style={styles.calendarChoose}>
                <Text style={styles.calendarText}>MAIO</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.welcomeWrapper}>
              <Text style={styles.welcomeText}>Bem vindo,</Text>
              <Text style={styles.userName}>{`${currentUser.firstName} ${
                currentUser.lastName
              }`}</Text>
            </View>

            {this.renderBalance()}
            <View style={styles.wrapperControl}>
              {this.handleIncome()}
              <Image style={styles.divider} source={icons.icnDivider} />
              {this.handleDebit()}
            </View>
          </View>
        )}
      </Fragment>
    );
  }

  handleIncome = () => {
    return (
      <View style={styles.wrapperIncome}>
        <Text style={styles.incomeText}>Total das Rendas</Text>
        <View style={styles.incomeWrapper}>
          <Text style={styles.incomeMoney}>R$</Text>
          <Text style={styles.incomeValue}>8.250,00</Text>
        </View>
        <Text style={styles.incomeAlert}>Você guardou R$250,00</Text>
        <Text style={styles.incomeAlert}>no mês passado.</Text>
      </View>
    );
  };

  handleDebit = () => {
    return (
      <View style={styles.wrapperDebit}>
        <Text style={styles.debitText}>Total dos Débitos</Text>
        <View style={styles.debitWrapper}>
          <Text style={styles.debitMoney}>R$</Text>
          <Text style={styles.debitValue}>750,00</Text>
        </View>
        <Text style={styles.debitAlert}>Você gastou R$1.500,00</Text>
        <Text style={styles.debitAlert}>a menos esse mês.</Text>
      </View>
    );
  };

  renderBalance = () => {
    return (
      <View style={styles.balanceWrapper}>
        <Text style={styles.balanceText}>Seu balanço atual é:</Text>
        <View style={styles.balanceValuesWrapper}>
          <Text style={styles.balanceMoney}>R$</Text>
          <Text style={styles.balanceValue}>7.500,00</Text>
        </View>
      </View>
    );
  };
}

Home.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Object).isRequired
};

const mapStateToProps = state => ({
  currentUser: state.loginState.loggedUser,
  isLoading: state.loginState.isLoading,
  error: state.loginState.error
});

export default connect(
  mapStateToProps,
  null
)(Home);
