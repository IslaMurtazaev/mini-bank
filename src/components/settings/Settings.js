import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Settings = props => {
  const {
    disableBalanceOnAdd,
    disableBalanceOnEdit,
    allowRegistration,
    actions
  } = props;

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Link to="/" className="btn btn-link">
            <i className="fas fa-arrow-circle-left" /> Back to Dashboard{" "}
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Edit Settings</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Allow Registration</label>{" "}
              <input
                type="checkbox"
                checked={!!allowRegistration}
                onChange={actions.toggleAllowRegistration}
              />
            </div>
            <div className="form-group">
              <label>Disable balance on add</label>{" "}
              <input
                type="checkbox"
                checked={!!disableBalanceOnAdd}
                onChange={actions.toggleDisableBalanceOnAdd}
              />
            </div>
            <div className="form-group">
              <label>Disable balance on edit</label>{" "}
              <input
                type="checkbox"
                checked={!!disableBalanceOnEdit}
                onChange={actions.toggleDisableBalanceOnEdit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Settings.propTypes = {
  disableBalanceOnAdd: PropTypes.bool.isRequired,
  disableBalanceOnEdit: PropTypes.bool.isRequired,
  allowRegistration: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    toggleDisableBalanceOnAdd: PropTypes.func.isRequireds,
    toggleDisableBalanceOnEdit: PropTypes.func.isRequireds,
    toggleAllowRegistration: PropTypes.func.isRequireds
  }).isRequired
};

export default Settings;
