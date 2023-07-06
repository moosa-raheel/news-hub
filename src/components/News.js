import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import NoData from "./NoData";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
      loading: true,
      page: 1,
      numarticle: 0,
      requests: 1,
      nomoreData: false,
    };
  }
  updateNews = async () => {
    this.setState({
      loading: true,
      article: [],
    });
    const a = fetch(
      `https://newsapi.org/v2/everything?q=${
        this.keyword ? this.keyword : this.props.cat
      }&sortBy=publishedAt&apiKey=264d29253b47449098440fda320fb10d&page=${
        this.state.page
      }&pagesize=10`
    );
    const b = (await a).json();
    const data = await b;
    this.setState({
      article: data.articles,
      loading: false,
      numarticle: data.totalResults,
    });
  };
  componentDidMount = async () => {
    this.updateNews();
  };
  keyword = "";
  search = async (event) => {
    this.keyword = document.querySelector("#search").value;
    this.updateNews();
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
  fetchMoreData = async () => {
    if (this.state.requests <= 10) {
      await this.setState({
        page: this.state.page + 1,
      });
      const a = fetch(
        `https://newsapi.org/v2/everything?q=${
          this.keyword ? this.keyword : this.props.cat
        }&sortBy=publishedAt&apiKey=264d29253b47449098440fda320fb10d&page=${
          this.state.page
        }&pagesize=10`
      );
      const b = (await a).json();
      const data = await b;
      await this.setState({
        article: this.state.article.concat(data.articles),
        requests: this.state.requests + 1,
      });
      console.log(this.state.requests);
    } else {
      await this.setState({
        nomoreData: true,
        loading: false,
      });
    }
  };
  render() {
    return (
      <>
        <form className="search container" onSubmit={this.search}>
          <input type="search" id="search" placeholder="Search News" required />
          <input type="submit" value="Search" />
        </form>
        <h1 className="text-center news-head">News-Hub - Headlines</h1>
        {this.state.article.length < 1 ? <Spinner /> : ""}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.numarticle}
          loader={!this.state.loading ? <Spinner /> : "loading"}
        >
          <div className="container main">
            {this.state.article.map((element, index) => {
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
                  key={index}
                  author={element.author ? element.author : "unknown"}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              );
            })}
          </div>
          {this.state.nomoreData ? <NoData /> : null}
        </InfiniteScroll>
      </>
    );
  }
}
