import React, { Component } from "react";
export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-img">
            <img src={this.props.img} alt="News Image" />
          </div>
          <div className="card-cont">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <a
              href={this.props.link}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
