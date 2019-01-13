export const NOTIFY_USER = "NOTIFY_USER";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

function notifyUser(message, messageType) {
  return { type: NOTIFY_USER, message, messageType };
}

function removeMessage() {
  return { type: REMOVE_MESSAGE };
}

export default {
  notifyUser,
  removeMessage
};
