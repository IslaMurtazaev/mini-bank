import { NOTIFY_USER, REMOVE_MESSAGE } from "./types";

export const notifyUser = (message, messageType) => {
  return {
    type: NOTIFY_USER,
    message,
    messageType
  };
};

export const removeMessage = () => {
  return {
    type: REMOVE_MESSAGE
  }
}
