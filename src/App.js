import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News cat="Pakistan" apikey={this.apiKey} />}
              key={"pakistan"}
            />
            <Route
              path="/health"
              element={
                <News cat="health" key={"health"} apikey={this.apiKey} />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  cat="entertainment"
                  key={"entertainment"}
                  apikey={this.apiKey}
                />
              }
            />
            <Route
              path="/tech"
              element={
                <News
                  cat="technology"
                  key={"technology"}
                  apikey={this.apiKey}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News cat="sports" key={"sports"} apikey={this.apiKey} />
              }
            />
            <Route
              path="/science"
              element={
                <News cat="science" key={"science"} apikey={this.apiKey} />
              }
            />
            <Route
              path="/business"
              element={
                <News cat="business" key={"business"} apikey={this.apiKey} />
              }
            />
            <Route
              path="/politics"
              element={
                <News cat="politics" key={"politics"} apikey={this.apiKey} />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
