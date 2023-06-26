import React, { Component } from "react";
import logo from "../img/logo.png";
export default class Navbar extends Component {
  toggle() {
    const header = document.getElementsByClassName("header")[0];
    header.classList.toggle("active");
  }
  render() {
    return (
      <>
        <header className="header ">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav className="navbar">
            <ul className="nav-items">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/">News</a>
              </li>
              <li className="nav-item">
                <a href="/">About</a>
              </li>
              <li className="nav-item">
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="mobile-navbar-btn" onClick={this.toggle}>
            <i className="fa-solid fa-bars open"></i>
            <i className="fa-solid fa-xmark close"></i>
          </div>
        </header>
      </>
    );
  }
}
