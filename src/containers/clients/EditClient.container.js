import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import EditClient from "../../components/clients/EditClient";

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered }, settings: { disableBalanceOnEdit } }, props) => ({
    client: ordered.client && ordered.client[0],
    disableBalanceOnEdit
  }), null)
)(EditClient);
