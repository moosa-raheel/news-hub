import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NomoreData from "./components/NoData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News cat="Pakistan" />}
              key={"pakistan"}
            />
            <Route
              path="/health"
              element={<News cat="health" key={"health"} />}
            />
            <Route
              path="/entertainment"
              element={<News cat="entertainment" key={"entertainment"} />}
            />
            <Route
              path="/tech"
              element={<News cat="technology" key={"technology"} />}
            />
            <Route
              path="/sports"
              element={<News cat="sports" key={"sports"} />}
            />
            <Route
              path="/science"
              element={<News cat="science" key={"science"} />}
            />
            <Route
              path="/business"
              element={<News cat="business" key={"business"} />}
            />
            <Route
              path="/politics"
              element={<News cat="politics" key={"politics"} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
