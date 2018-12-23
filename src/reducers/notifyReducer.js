import { NOTIFY_USER, REMOVE_MESSAGE } from "../actions/types";

const initialState = {
  message: null,
  messageType: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: action.message,
        messageType: action.messageType
      };
    case REMOVE_MESSAGE:
      return initialState;
    default:
      return state;
  }
}
