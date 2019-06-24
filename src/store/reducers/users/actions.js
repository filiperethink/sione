import { getLoggedUser } from '~/api';
import {
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
} from './types';

export const getCurrentUserRequest = () => ({
  type: GET_CURRENT_USER_REQUEST,
});
export const getCurrentUserSuccess = user => ({
  type: GET_CURRENT_USER_SUCCESS,
  user,
});
export const getCurrentUserFailed = error => ({
  type: GET_CURRENT_USER_FAILED,
  error,
});

export const getCurrentUser = () => async dispatch => {
  try {
    dispatch(getCurrentUserRequest());
    const user = await getLoggedUser();
    dispatch(getCurrentUserSuccess(user));
  } catch (error) {
    dispatch(getCurrentUserFailed(error.message));
  }
};
