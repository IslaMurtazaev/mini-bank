import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { notifyUser, removeMessage } from "../../actions/notifyActions";
import Alert from "../common/Alert";

class Login extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired
  };

  state = {
    email: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { firebase, history, notifyUser, removeMessage } = this.props;

    firebase
      .login({
        email,
        password
      })
      .then(() => {
        removeMessage();
        history.push("/");
      })
      .catch(err => notifyUser("Wrong credentials", "error"));
  };

  render() {
    const { message, messageType } = this.props.notify;

    return (
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" />
                  &nbsp;Login
                </span>
              </h1>
              {message && <Alert message={message} messageType={messageType} />}
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block mt-4"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser, removeMessage }
  )
)(Login);
