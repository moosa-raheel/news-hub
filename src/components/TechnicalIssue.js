import React, { Component } from "react";

export default class TechnicalIssue extends Component {
  reload() {
    window.location.reload();
  }
  render() {
    return (
      <>
        <div className="tIssue">
          <h1>
            ! We Have Some Technical Issue Please Try Again After Moment
            <br />
            Or Check Your Internet Connection And Reload Page
          </h1>
          <button onClick={this.reload} className="btn">
            Reload
          </button>
        </div>
      </>
    );
  }
}
