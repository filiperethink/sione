import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";

// Styles
import { styles } from "./SideMenuStyle";

class component extends Component {
  state = {};

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  logout = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate("Auth");
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Home")}
              >
                Inicio
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Bills")}
              >
                Contas
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("AddBills")}
              >
                Criar Contas
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Charts")}
              >
                Gráficos
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={this.logout} style={styles.footerContainer}>
          <Text>Sair do app</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

component.defaultProps = {};

component.propTypes = {};

export default component;
