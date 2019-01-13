import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

import AppNavbar from "../../components/layout/AppNavbar";

function mapStateToProps(state, ownProps) {
  return {
    auth: state.firebase.auth,
    allowRegistration: state.settings.allowRegistration
  }
}

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, null)
)(AppNavbar);
