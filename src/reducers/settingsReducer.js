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

export default createReducer(
  {
    [TOGGLE_DISABLE_BALANCE_ON_ADD]: state =>
      merge(state, { disableBalanceOnAdd: !state.disableBalanceOnAdd }),
    [TOGGLE_DISABLE_BALANCE_ON_EDIT]: state =>
      merge(state, { disableBalanceOnEdit: !state.disableBalanceOnEdit }),
    [TOGGLE_ALLOW_REGISTRATION]: state =>
      merge(state, { allowRegistration: !state.allowRegistration })
  },
  INITIAL_STATE
);
