import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class AppNavbar extends Component {
  static propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    allowRegistration: PropTypes.bool.isRequired
  };

  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    return { isAuthenticated: !!auth.uid };
  }

  onLogout = e => {
    e.preventDefault();

    const { firebase } = this.props;

    firebase.logout();
  };

  render() {
    const { isAuthenticated } = this.state;
    const { auth, allowRegistration } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Client panel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              {isAuthenticated && (
                <React.Fragment>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                      Settings
                    </Link>
                  </li>
                </React.Fragment>
              )}
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            {isAuthenticated && (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    {auth.email}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link" onClick={this.onLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            )}
            {!isAuthenticated && allowRegistration && (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Log in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Sign up
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
