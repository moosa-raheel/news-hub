import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
export default class News extends Component {
  constructor(props) {
    super();
    this.state = {
      article: [],
      loading: true,
      page: 1,
    };
  }
  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/everything?q=${
        this.keyword ? this.keyword : "pakistan"
      }&sortBy=publishedAt&apiKey=264d29253b47449098440fda320fb10d&page=${
        this.state.page
      }&pagesize=20`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          article: data.articles,
          loading: false,
          numarticle: data.totalResults,
        });
      });
  }
  keyword = "";
  prev = async () => {
    this.setState({ loading: true, article: [] });
    const a = fetch(
      `https://newsapi.org/v2/everything?q=${
        this.keyword ? this.keyword : "pakistan"
      }&sortBy=publishedAt&apiKey=264d29253b47449098440fda320fb10d&page=${
        this.state.page - 1
      } &pagesize=20`
    );
    const b = (await a).json();
    const c = await b;
    this.setState({
      page: this.state.page - 1,
      article: c.articles,
      loading: false,
    });
  };
  next = async () => {
    this.setState({ loading: true, article: [] });
    if (this.state.page > Math.ceil(this.state.numarticle) / 20) {
    } else {
      const a = fetch(
        `https://newsapi.org/v2/everything?q=${
          this.keyword ? this.keyword : "pakistan"
        }&sortBy=publishedAt&apiKey=264d29253b47449098440fda320fb10d&page=${
          this.state.page + 1
        } &pagesize=20`
      );
      const b = (await a).json();
      const c = await b;
      this.setState({
        page: this.state.page + 1,
        article: c.articles,
        loading: false,
      });
    }
  };
  search = async (event) => {
    this.keyword = document.querySelector("#search").value;
    fetch(
      `https://newsapi.org/v2/everything?q=${this.keyword}&sortBy=publishedAt&apiKey=264d29253b47449098440fda320fb10d&page=${this.state.page}&pagesize=20`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          article: data.articles,
          loading: false,
          numarticle: data.totalResults,
        });
      });
    event.preventDefault();
  };
  btnDisable = {
    opacity: 0.5,
    cursor: "not-allowed",
  };
  btnEnable = {
    opacity: 1,
    cursor: "pointer",
  };
  render() {
    return (
      <>
        <form className="search container" onSubmit={this.search}>
          <input type="search" id="search" placeholder="Search News" required />
          <input type="submit" value="Search" />
        </form>
        <h1 className="text-center news-head">News-Hub - Headlines</h1>
        {this.state.loading ? <Spinner /> : ""}
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
          <button
            disabled={this.state.page <= 1 ? true : false}
            onClick={this.prev}
            style={this.state.page <= 1 ? this.btnDisable : this.btnEnable}
          >
            <span>&larr;</span> Previous
          </button>
          <button
            disabled={
              this.state.page > Math.ceil(this.state.numarticle) / 20
                ? true
                : false
            }
            onClick={this.next}
            style={
              this.state.page > Math.ceil(this.state.numarticle) / 20
                ? this.btnDisable
                : this.btnEnable
            }
          >
            Next <span>&rarr;</span>
          </button>
        </div>
      </>
    );
  }
}
