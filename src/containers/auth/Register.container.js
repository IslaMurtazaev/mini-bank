import { bindActionCreators, compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";

import Register from "../../components/auth/Register";
import notifyActions from "../../actions/notifyActions";

function mapStateToProps(state, ownProps) {
  return {
    ...state.notify,
    allowRegistration: state.settings.allowRegistration
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(notifyActions, dispatch)
  };
}

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Register);
