import { bindActionCreators, compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";

import Login from "../../components/auth/Login";
import notifyActions from "../../actions/notifyActions";

function mapStateToProps(state, ownProps) {
  return state.notify;
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
)(Login);
