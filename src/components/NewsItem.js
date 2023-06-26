import React, { Component } from "react";
export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-img">
            <img
              src="https://code.visualstudio.com/assets/docs/languages/javascript/overview.png"
              alt="justin"
            />
          </div>
          <div className="card-cont">
            <h3>Justin Bieber</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              libero quae culpa, sint distinctio consequuntur numquam eligendi
              nesciunt vel tempore, laudantium voluptatem nisi neque corrupti
              minima doloremque nobis? Vero, voluptate!
            </p>
            <a href="/" className="btn">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
