import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class AddClient extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  };

  static PropTypes = {
    firestore: PropTypes.shape({
      add: PropTypes.func.isRequired
    }),
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { firestore, history } = this.props;

    const newClient = this.state;
    newClient.balance = newClient.balance ? +newClient.balance : 0;

    firestore.add({ collection: "clients" }, newClient).then(history.push("/"));
  };

  render() {
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
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit} className="form-group">
              <label htmlFor="firsName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                minLength="2"
                required
                onChange={this.onChange}
                value={this.state.firstName}
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                minLength="2"
                required
                onChange={this.onChange}
                value={this.state.lastName}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />

              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                minLength="10"
                required
                onChange={this.onChange}
                value={this.state.phone}
              />

              <label htmlFor="balance">Balance</label>
              <input
                type="number"
                className="form-control"
                name="balance"
                onChange={this.onChange}
                value={this.state.balance}
              />

              <br />
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default firestoreConnect()(AddClient);
