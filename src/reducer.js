import { combineReducers } from "redux";
import { reducer as toastr } from "react-redux-toastr";
import * as homePage from "./scenes/HomePage";

export const reducer = combineReducers({
  toastr,
  homePage: homePage.reducer
});
