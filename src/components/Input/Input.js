import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TextInput, Image, Text } from "react-native";

// Images
import images from "../../assets/images";

// Styles
import { styles } from "./InputStyle";

const { icons } = images;
class Input extends Component {
  state = {};

  handleIcon = name => {
    let icon;
    switch (name) {
      case "email":
        icon = icons.icnEmail;
        break;
      case "password":
        icon = icons.icnPass;
        break;
      default:
        break;
    }
    return icon;
  };

  render() {
    const {
      placeholder,
      onChange,
      keyboard,
      name,
      touched,
      errors
    } = this.props;
    const setIcon = this.handleIcon(name);
    return (
      <>
        <View
          style={[
            styles.inputWrapper,
            {
              borderBottomColor:
                touched[name] && errors[name] ? "#F43C3C" : "#857CBF"
            }
          ]}
        >
          <Image style={styles.icon} source={setIcon} />
          <TextInput
            {...this.props}
            style={styles.input}
            secureTextEntry={name === "password"}
            placeholderTextColor="#857CBF"
            placeholder={placeholder}
            autoCapitalize="none"
            onChangeText={onChange}
            keyboardType={keyboard}
          />
        </View>
        {touched[name] && errors[name] && (
          <Text style={styles.errorText}>{errors[name]}</Text>
        )}
      </>
    );
  }
}

Input.defaultProps = {
  keyboard: "email-address"
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  keyboard: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Input;
