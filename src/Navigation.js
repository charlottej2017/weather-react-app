import React, { Component } from "react";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <a to="/">Lisbon</a>
          </li>
          <li className="navigation-item">
            <a to="/paris">Paris</a>
          </li>
          <li className="navigation-item">
            <a to="/sydney">Sydney</a>
          </li>
          <li className="navigation-item">
            <a to="/san-francisco">San Francisco</a>
          </li>
        </ul>
      </header>
    );
  }
}
