import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../common/Spinner";

class EditClient extends Component {
  constructor(props) {
    super(props);
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
  }

  static propTypes = {
    firestore: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    disableBalanceOnEdit: PropTypes.bool.isRequired,
    client: PropTypes.object
  };

  onSubmit = e => {
    e.preventDefault();

    const { client, firestore, history } = this.props;

    const updatedClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance: this.balanceInput.current.value
        ? +this.balanceInput.current.value
        : 0
    };

    firestore.update({ collection: "clients", doc: client.id }, updatedClient)
    .then(history.push(`/client/${client.id}`));
  };

  render() {
    const { client, disableBalanceOnEdit } = this.props;

    if (client) {
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
            <div className="card-header">Edit Client</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit} className="form-group">
                <label htmlFor="firsName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="2"
                  required
                  ref={this.firstNameInput}
                  defaultValue={client.firstName}
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  minLength="2"
                  required
                  ref={this.lastNameInput}
                  defaultValue={client.lastName}
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  ref={this.emailInput}
                  defaultValue={client.email}
                />

                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="10"
                  required
                  ref={this.phoneInput}
                  defaultValue={client.phone}
                />

                <label htmlFor="balance">Balance</label>
                <input
                  type="number"
                  className="form-control"
                  name="balance"
                  ref={this.balanceInput}
                  defaultValue={client.balance}
                  disabled={disableBalanceOnEdit}
                />

                <br />
                <input
                  type="submit"
                  defaultValue="Submit"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default EditClient;
