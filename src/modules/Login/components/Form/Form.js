import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, Animated, Easing } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { Input } from "../../../../components";
// Styles
import { styles } from "./FormStyle";

const move = new Animated.Value(-20);

class Form extends Component {
  state = {};

  componentDidMount = () => {
    Animated.timing(move, {
      toValue: 0,
      duration: 700,
      easing: Easing.linear
    }).start();
  };

  render() {
    const validation = yup.object().shape({
      email: yup
        .string()
        .email("Insira um email válido.")
        .required("Email é Obrigatório."),
      password: yup
        .string()
        .matches(
          /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
          "Senha deve conter caracteres maiúsculos, minúsculos e números."
        )
        .min(6, "Minimo 6 caracteres")
        .required("Senha é Obrigatório.")
    });
    const { onSubmit } = this.props;
    return (
      <Animated.View style={[styles.wrapper, { top: move }]}>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          {({
            values,
            handleChange,
            isValid,
            handleSubmit,
            setFieldTouched,
            touched,
            errors
          }) => {
            return (
              <Fragment>
                <Input
                  name="email"
                  placeholder="Email:"
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  touched={touched}
                  errors={errors}
                />
                <Input
                  name="password"
                  placeholder="Senha:"
                  keyboard="default"
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  touched={touched}
                  errors={errors}
                />
                <Text onPress={() => null} style={styles.hyperLink}>
                  ESQUECI MINHA SENHA
                </Text>
                <TouchableOpacity
                  disabled={!isValid}
                  onPress={handleSubmit}
                  style={[styles.submitButton, !isValid && { opacity: 0.6 }]}
                >
                  <Text style={styles.buttonText}>ACESSAR</Text>
                </TouchableOpacity>
              </Fragment>
            );
          }}
        </Formik>
      </Animated.View>
    );
  }
}

Form.defaultProps = {};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
