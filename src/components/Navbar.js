import React, { Component } from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  handleNav() {
    const header = document.getElementsByTagName("header")[0];
    header.classList.toggle("active");
    const li = document.querySelectorAll("ul li");
    for (const element of li) {
      if (!element.classList.contains("dis")) {
        element.addEventListener("click", () => {
          header.classList.remove("active");
          console.log("click");
        });
      }
    }
  }
  render() {
    return (
      <>
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="icons" onClick={this.handleNav}>
            <i className="fa-solid fa-bars open"></i>
            <i className="fa-solid fa-xmark close"></i>
          </div>
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item dis">
                <Link to="#">
                  Catagories <span>+</span>
                </Link>
                <ul>
                  <li>
                    <Link to="/entertainment">entertainment</Link>
                  </li>
                  <li>
                    <Link to="/business">business</Link>
                  </li>
                  <li>
                    <Link to="/sports">sports</Link>
                  </li>
                  <li>
                    <Link to="/business">business</Link>
                  </li>
                  <li>
                    <Link to="/science">science</Link>
                  </li>
                  <li>
                    <Link to="/technology">technology</Link>
                  </li>
                  <li>
                    <Link to="/health">health</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
