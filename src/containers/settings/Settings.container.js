import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Settings from "../../components/settings/Settings";
import settingActions from "../../actions/settingsActions";

function mapStateToProps(state, ownProps) {
  return {
    ...state.settings,
    auth: state.firebase.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(settingActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
