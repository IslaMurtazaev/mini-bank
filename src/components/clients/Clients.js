import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: 1,
        firstName: "Islam",
        lastName: "Murtazaev",
        email: "islam.muratazaev@gmail.com",
        phone: "+995771860857",
        balance: 300
      },
      {
        id: 2,
        firstName: "Eliza",
        lastName: "Murtazaeva",
        email: "eliza.muratazaev@gmail.com",
        phone: "+995771860857",
        balance: 500
      }
    ];

    if (clients) {
      return (
        <div className="row">
          <div className="col-md-6">
            <h2>
              <i className="fas fa-users" />
              Clients
            </h2>
          </div>
          <div className="col-md-6" />

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
      return <h1>Loading..</h1>;
    }
  }
}

export default Clients;
