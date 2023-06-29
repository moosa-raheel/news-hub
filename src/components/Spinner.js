import React, { Component } from "react";
import Spinner from "../img/loading.gif";
export default class spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={Spinner} alt="loading......" />
      </div>
    );
  }
}
