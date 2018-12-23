import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import classnames from "classnames";

import Spinner from "../common/Spinner";

class ClientDetails extends Component {
  static propTypes = {
    client: PropTypes.object,
    firestore: PropTypes.object.isRequired
  };

  state = {
    showBalanceUpdate: false,
    balanceUpdateAmout: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClientDelete = () => {
    const { client, firestore, history } = this.props;

    firestore
      .delete({ collection: "clients", doc: client.id })
      .then(history.push("/"));
  };

  submitBalance = e => {
    e.preventDefault();

    const { client, firestore } = this.props;
    const { balanceUpdateAmout } = this.state;

    if (!balanceUpdateAmout) {
      return;
    }

    const clientUpdate = {
      balance: +balanceUpdateAmout
    };

    firestore.update({ collection: "clients", doc: client.id }, clientUpdate);
  };

  render() {
    const { client } = this.props;
    const { showBalanceUpdate, balanceUpdateAmout } = this.state;

    const balanceForm = showBalanceUpdate ? (
      <form onSubmit={this.submitBalance}>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            name="balanceUpdateAmout"
            placeholder="Update balance"
            value={balanceUpdateAmout}
            onChange={this.onChange}
          />
          <div className="input-group-append">
            <input
              type="submit"
              value="Update"
              className="btn btn-outline-dark"
            />
          </div>
        </div>
      </form>
    ) : null;

    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Back to Dashboard{" "}
              </Link>
            </div>
            <div className="col-md-6">
              <div className="btn-group float-right">
                <Link to={`/client/edit/${client.id}`} className="btn btn-dark">
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={this.onClientDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="card">
            <div className="card-header">
              <h3>
                {client.firstName} {client.lastName}
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <h4>
                    Client ID:{" "}
                    <span className="text-secondary">{client.id} </span>{" "}
                  </h4>
                </div>
                <div className="col-md-4 col-sm-6">
                  <h3 className="pull-right">
                    Balance:{" "}
                    <span
                      className={classnames({
                        "text-danger": client.balance > 0,
                        "text-success": client.balance === 0
                      })}
                    >
                      ${parseFloat(client.balance).toFixed(2)}
                    </span>
                    <small>
                      <a
                        href="#!"
                        onClick={() =>
                          this.setState({
                            showBalanceUpdate: !this.state.showBalanceUpdate
                          })
                        }
                      >
                        &nbsp;
                        <i className="fas fa-pencil-alt" />
                      </a>
                    </small>
                  </h3>
                  {balanceForm}
                </div>
              </div>
              <hr />
              <ul className="list-group">
                <li className="list-group-item">
                  Contact Email: {client.email}
                </li>
                <li className="list-group-item">
                  Contact Phone: {client.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default compose(
  firestoreConnect(props => [
    { collection: "clients", storeAs: "client", doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
