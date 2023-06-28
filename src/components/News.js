import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=pakistan&sortBy=publishedAt&apiKey=264d29253b47449098440fda320fb10d"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          article: data.articles,
          loading: false,
        });
      });
  }
  render() {
    return (
      <>
        <h1 className="text-center news-head">News-Hub - Headlines</h1>
        <div className="container main">
          {this.state.article.map((element) => {
            return (
              <NewsItem
                img={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
                }
                title={
                  element.title && element.title.length > 50
                    ? element.title.slice(0, 50) + "...."
                    : element.title
                }
                desc={
                  element.description && element.description.length > 140
                    ? element.description.slice(0, 140) + "..."
                    : element.description
                }
                link={element.url}
                key={element.url}
              />
            );
          })}
        </div>
        <div className="container button">
          <button>
            <span>&larr;</span> Previous
          </button>
          <button>
            Next <span>&rarr;</span>
          </button>
        </div>
      </>
    );
  }
}
