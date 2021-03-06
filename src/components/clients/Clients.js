import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../common/Spinner";

class Clients extends Component {
  state = {
    totalOwed: null
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      const total = clients.reduce(
        (total, client) => (total += client.balance),
        0
      );

      return { totalOwed: total };
    }

    return null;
  }

  static propTypes = {
    firestore: PropTypes.object.isRequired,
    clients: PropTypes.array
  };

  render() {
    const { clients } = this.props;
    const { totalOwed } = this.state;

    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" />
              Clients
            </h2>
          </div>
          <div className="col-md-6">
            <h5 className="text-right text-secondary">
              Total Owed:&nbsp;
              <span className="text-primary">
                ${parseFloat(totalOwed).toFixed(2)}
              </span>
            </h5>
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.firstName}</td>
                  <td>{client.lastName}</td>
                  <td>$ {parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default Clients;
