import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import JSON from "../json";
export default class News extends Component {
  render() {
    return (
      <>
        <h1 className="text-center news-head">News-Hub - Headlines</h1>
        <div className="container main">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </>
    );
  }
}
