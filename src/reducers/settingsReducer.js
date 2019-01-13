import merge from "xtend";
import createReducer from "./create-reducer";
import {
  TOGGLE_DISABLE_BALANCE_ON_ADD,
  TOGGLE_DISABLE_BALANCE_ON_EDIT,
  TOGGLE_ALLOW_REGISTRATION
} from "../actions/settingsActions";

const INITIAL_STATE = {
  disableBalanceOnAdd: true,
  disableBalanceOnEdit: true,
  allowRegistration: false
};

if (localStorage.getItem("settings") === null) {
  localStorage.setItem("settings", JSON.stringify(INITIAL_STATE));
}
const STATE = { ...JSON.parse(localStorage.getItem("settings")) };

export default createReducer(
  {
    [TOGGLE_DISABLE_BALANCE_ON_ADD]: state => {
      const newState = merge(state, {
        disableBalanceOnAdd: !state.disableBalanceOnAdd
      });
      localStorage.setItem("settings", JSON.stringify(newState));
      return newState;
    },
    [TOGGLE_DISABLE_BALANCE_ON_EDIT]: state => {
      const newState = merge(state, {
        disableBalanceOnEdit: !state.disableBalanceOnEdit
      });
      localStorage.setItem("settings", JSON.stringify(newState));
      return newState;
    },
    [TOGGLE_ALLOW_REGISTRATION]: state => {
      const newState = merge(state, {
        allowRegistration: !state.allowRegistration
      });
      localStorage.setItem("settings", JSON.stringify(newState));
      return newState;
    }
  },
  STATE
);
