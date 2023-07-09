import React, { Component } from "react";

export default class NoResultFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="no-result">
          <h1 className=" text-center">
            No Result Found Of {this.props.keyword}
          </h1>
        </div>
      </div>
    );
  }
}
