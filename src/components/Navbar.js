import React, { Component } from "react";
import logo from "../img/logo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  static defaultProps = {
    one: "Home",
    two: "Categories",
    three: "About",
    four: "Contact",
  };
  static propTypes = {
    one: PropTypes.string,
    two: PropTypes.string,
    three: PropTypes.string,
    four: PropTypes.string,
  };
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
                <Link to="/">{this.props.one}</Link>
              </li>
              <li className="nav-item">
                <a href="/about">{this.props.two}</a>
                <ul className="dropdown">
                  <li>
                    <Link to="/entertainment">Entertainment</Link>
                  </li>
                  <li>
                    <Link to="/health">Health</Link>
                  </li>
                  <li>
                    <Link to="/tech">Tech</Link>
                  </li>
                  <li>
                    <Link to="/sports">Sports</Link>
                  </li>
                  <li>
                    <Link to="/business">Business</Link>
                  </li>
                  <li>
                    <Link to="/politics">Politics</Link>
                  </li>
                  <li>
                    <Link to="/science">Science</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/gallery">{this.props.three}</a>
              </li>
              <li className="nav-item">
                <a href="/conatct">{this.props.four}</a>
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
