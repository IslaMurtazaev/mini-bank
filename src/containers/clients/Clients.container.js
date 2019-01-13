import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import Clients from "../../components/clients/Clients";

function mapStateToProps(state, ownProps) {
  return {
    clients: state.firestore.ordered.clients,
  };
}

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect(mapStateToProps, null)
)(Clients);
