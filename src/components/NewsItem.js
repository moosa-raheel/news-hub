import React, { Component } from "react";
export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card" data-aos="flip-up">
          <div className="card-img">
            <img src={this.props.img} alt="News" />
          </div>
          <div className="card-cont">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
            <span>
              Post by {this.props.author} at{" "}
              {new Date(this.props.date).toGMTString()}
            </span>
            <a
              href={this.props.link}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
          <p className="source">{this.props.source}</p>
        </div>
      </>
    );
  }
}
