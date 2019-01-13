import { firestoreConnect } from "react-redux-firebase";
import AddClient from "../../components/clients/AddClient";

export default firestoreConnect()(AddClient);
