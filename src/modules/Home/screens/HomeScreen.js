import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import PropTypes from "prop-types";
import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import firebase from "react-native-firebase";

// Styles
import { styles } from "./HomeScreenStyle";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    currentUser: null
  };

  componentWillMount = async () => {
    SplashScreen.hide();
    const { navigation } = this.props;
    try {
      const token = await AsyncStorage.getItem("@tokenUser");
      if (!token) {
        navigation.navigate("Auth");
      }
      const currentUserId = firebase.auth().currentUser.uid;
      const data = await firebase
        .database()
        .ref("users")
        .child(currentUserId)
        .once();

      this.setState({
        currentUser: data.val()
      });
    } catch (error) {
      console.log({ error });
    }
  };

  handleLogout = async () => {
    const { navigation } = this.props;
    try {
      await AsyncStorage.removeItem("@tokenUser");
      await firebase.auth().signOut();
      navigation.navigate("Auth");
    } catch (error) {
      console.log({ error });
    }
  };
  render() {
    const { currentUser } = this.state;
    console.log(this.props.navigation.getParam());

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#f9f9f9",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity onPress={this.handleLogout}>
          <Text>Remove Token</Text>
        </TouchableOpacity>
        {!currentUser ? (
          <Text>Carregando</Text>
        ) : (
          <>
            <Image
              style={{
                width: 80,
                height: 80,
                backgroundColor: "#c6c6c6",
                borderRadius: 40
              }}
              resizeMode="cover"
              source={{ uri: currentUser.avatarUrl, cache: "force-cache" }}
            />
            <Text>{`${currentUser.firstName} ${currentUser.lastName}`}</Text>
          </>
        )}

        <TouchableOpacity
          style={{
            padding: 20,
            marginTop: 50,
            backgroundColor: "#f88f88",
            borderRadius: 10
          }}
          onPress={() => null}
        >
          <Text>Refresh</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
