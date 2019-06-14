import { ON_LOGIN_REQUEST, ON_LOGIN_SUCCESS, ON_LOGIN_FAILED } from "./types";
import { loginApi, getToken, getUserById } from "../../../api";
import AsyncStorage from "@react-native-community/async-storage";

export const onLoginRequest = () => {
  return {
    type: ON_LOGIN_REQUEST
  };
};

export const onLoginSuccess = user => {
  return {
    type: ON_LOGIN_SUCCESS,
    user
  };
};

export const onLoginFailed = error => {
  return {
    type: ON_LOGIN_FAILED,
    error
  };
};

export const onLogin = (email, password) => async dispatch => {
  try {
    dispatch(onLoginRequest());
    const { user } = await loginApi(email, password);
    const storedUser = await getUserById(user.uid);
    const currentUser = {
      firstName: storedUser[0].firstName,
      lastName: storedUser[0].lastName,
      email: storedUser[0].email,
      id: user.uid,
      avatarUrl: storedUser[0].avatarUrl
    };
    if (user.uid) {
      const { token } = await getToken();
      await AsyncStorage.setItem("@sione/userToken", token);
      await AsyncStorage.setItem("@sione/userId", user.uid);
    }

    dispatch(onLoginSuccess(currentUser));
    return {
      status: true
    };
  } catch (error) {
    dispatch(onLoginFailed(error));
  }
};
