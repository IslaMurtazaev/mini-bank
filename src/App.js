import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/App.css"

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";
import AppNavbar from "./containers/layout/AppNavbar.container";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./containers/clients/AddClient.container";
import EditClient from "./containers/clients/EditClient.container";
import ClientDetails from "./containers/clients/ClientDetails.container";
import Settings from "./containers/settings/Settings.container";
import Login from "./containers/auth/Login.container";
import Register from "./containers/auth/Register.container";
import About from "./components/layout/About";
import NotFound from "./components/common/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
              <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
              <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)} />
              <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
              <Route exact path="/settings" component={UserIsAuthenticated(Settings)} />
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
              <Route exact path="/signup" component={UserIsNotAuthenticated(Register)} />
              <Route exact path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
