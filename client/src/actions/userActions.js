import axios from "axios";
import cookie from "js-cookie";
import { toast } from "react-toastify";
import {
  USER_LOGOUT,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_VIEW_TOKEN,
} from "../context/userContext";

export const signin = (userName, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { userName, password } });
  try {
    const { data } = await axios.post("/user/login", { userName, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    cookie.set("user", JSON.stringify(data));
    toast.success("Wellcome");
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.msg });
    toast.error(error.response.data.msg);
  }
};

export const getToken = (token) => {
  return {
    type: USER_VIEW_TOKEN,
    payload: token,
  };
};

export const logout = () => async (dispatch) => {
  await axios.post("/user/logout");
  cookie.remove("userinfo");
  dispatch({ type: USER_LOGOUT });
};
