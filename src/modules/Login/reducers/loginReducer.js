import initialState from "../../../store/initialState";
import {
  ON_LOGIN_REQUEST,
  ON_LOGIN_SUCCESS,
  ON_LOGIN_FAILED
} from "../actions/types";

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case ON_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        loggedUser: action.user
      };
    case ON_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.error
      };
    default:
      return state;
  }
};
export default authReducer;
