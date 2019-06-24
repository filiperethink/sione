import AsyncStorage from '@react-native-community/async-storage';
import { ON_LOGIN_REQUEST, ON_LOGIN_SUCCESS, ON_LOGIN_FAILED } from './types';
import { loginApi, getToken, getLoggedUser } from '~/api';

export const onLoginRequest = () => ({
  type: ON_LOGIN_REQUEST,
});

export const onLoginSuccess = user => ({
  type: ON_LOGIN_SUCCESS,
  user,
});

export const onLoginFailed = error => ({
  type: ON_LOGIN_FAILED,
  error,
});

export const onLogin = (email, password) => async dispatch => {
  try {
    dispatch(onLoginRequest());
    const { user } = await loginApi(email, password);
    const storedUser = await getLoggedUser(user.uid);
    if (user.uid) {
      const { token } = await getToken();
      await AsyncStorage.setItem('@sione/userToken', token);
      await AsyncStorage.setItem('@sione/userId', user.uid);
    }

    dispatch(onLoginSuccess(storedUser));
    return {
      status: true,
    };
  } catch (error) {
    dispatch(onLoginFailed(error));
  }
};
