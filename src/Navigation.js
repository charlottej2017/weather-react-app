import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <header>
      <ul className="navigation-items">
        <li className="navigation-item">
          <a href="/">Lisbon</a>
        </li>
        <li className="navigation-item">
          <a href="/paris">Paris</a>
        </li>
        <li className="navigation-item">
          <a href="/sydney">Sydney</a>
        </li>
        <li className="navigation-item">
          <a href="/san-francisco">San Francisco</a>
        </li>
      </ul>
    </header>
  );
}
