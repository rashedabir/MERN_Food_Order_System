import {
  USER_LOGOUT,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_VIEW_TOKEN,
} from "../context/userContext";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, auth: true, user: action.payload };
    case USER_VIEW_TOKEN:
      return { loading: false, auth: true, user: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, auth: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
