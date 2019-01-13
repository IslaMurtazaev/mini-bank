import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import notify from "./notifyReducer";
import settings from "./settingsReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify,
  settings
});
