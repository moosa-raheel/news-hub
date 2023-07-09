import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      prgress: 10,
    };
  }
  setProgress = (progress) => {
    this.setState({ prgress: progress });
  };
  apiKey = process.env.REACT_APP_API_KEY;
  render() {
    return (
      <>
        <BrowserRouter>
          <LoadingBar
            color="#f11946"
            progress={this.state.prgress}
            height={3}
          />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  cat="Pakistan"
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
              key={"pakistan"}
            />
            <Route
              path="/health"
              element={
                <News
                  heading={"About Health"}
                  cat="health"
                  key={"health"}
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  heading={"About Entertainment"}
                  cat="entertainment"
                  key={"entertainment"}
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
            />
            <Route
              path="/tech"
              element={
                <News
                  heading={"About Technology"}
                  cat="technology"
                  key={"technology"}
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  heading={"About Sports"}
                  cat="sports"
                  key={"sports"}
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  heading={"About Science"}
                  cat="science"
                  key={"science"}
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  heading={"About Business"}
                  cat="business"
                  key={"business"}
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
            />
            <Route
              path="/politics"
              element={
                <News
                  cat="politics"
                  heading={"About Politics"}
                  key={"politics"}
                  apikey={this.apiKey}
                  setProg={this.setProgress}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
