import merge from "xtend";
import createReducer from "./create-reducer";
import { NOTIFY_USER, REMOVE_MESSAGE } from "../actions/notifyActions";

const INITIAL_STATE = {
  message: null,
  messageType: null
};

export default createReducer({
    [NOTIFY_USER]: (state, action) => merge(state, {
        message: action.message,
        messageType: action.messageType
      }),
    [REMOVE_MESSAGE]: state => merge(state, INITIAL_STATE)
  },
  INITIAL_STATE
);
