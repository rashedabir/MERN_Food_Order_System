import { combineReducers } from "redux";
import { userSigninReducer } from "./userReducers";

const reducer = combineReducers({
  user: userSigninReducer,
});

export default reducer;
