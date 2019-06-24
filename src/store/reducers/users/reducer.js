import initialState from '~/store/initialState';
import {
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILED,
} from './types';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        loggedUser: action.user,
      };
    case GET_CURRENT_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default userReducer;
