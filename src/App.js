import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/App.css"

import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth";
import AppNavbar from "./components/layout/AppNavbar";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import EditClient from "./components/clients/EditClient";
import ClientDetails from "./components/clients/ClientDetails";
import Login from "./components/auth/Login";
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
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
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
