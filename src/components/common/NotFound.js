import React, { Component } from "react";
import notFound from "../../assets/notFound.gif";

class NotFound extends Component {
  componentDidMount() {
    document.body.style = "background: #35B992;";
  }

  componentWillUnmount() {
    document.body.style = "background: #ffff";
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Oops... Looks like we don't have such page yet(</h1>
        <img className="not-found" src={notFound} alt="page not found" />
      </div>
    );
  }
}

export default NotFound;
