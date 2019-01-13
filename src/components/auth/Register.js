import React, { Component } from "react";
import PropTypes from "prop-types";
import Alert from "../common/Alert";

class Register extends Component {
  static propTypes = {
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      notifyUser: PropTypes.func.isRequired,
      removeMessage: PropTypes.func.isRequired
    }).isRequired,
    allowRegistration: PropTypes.bool.isRequired,
    message: PropTypes.string,
    messageType: PropTypes.string,
  };

  state = {
    email: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { firebase, history, actions } = this.props;

    firebase
      .createUser({ email, password })
      .then(() => {
        actions.removeMessage();
        history.push("/");
      })
      .catch(err => actions.notifyUser("Such User Already Exists", "error"));
  };

  componentWillMount() {
    const { history, message, allowRegistration, actions } = this.props;

    if (!allowRegistration) {
      history.push("/login")
    } else if (message) {
      actions.removeMessage();
    }
  }

  render() {
    const { message, messageType } = this.props;

    return (
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" />
                  &nbsp;Register
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
                      value="Sign up"
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

export default Register;
