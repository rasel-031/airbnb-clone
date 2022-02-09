import { combineReducers } from "redux";
import userReducer from "./userReducer";
import signupToggleReducer from "./signupToggleReducer";

const rootReducers = combineReducers({
  userLogin: userReducer,
  signUpToggle: signupToggleReducer,
});

export default rootReducers;
