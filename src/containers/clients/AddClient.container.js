import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import AddClient from "../../components/clients/AddClient";

function mapStateToProps(state, ownProps) {
  return {
    disableBalanceOnAdd: state.settings.disableBalanceOnAdd
  };
}

export default compose(
  firestoreConnect(),
  connect(mapStateToProps, null)
)(AddClient);
