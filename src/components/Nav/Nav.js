import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Pupster
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              MUMBO
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/form"
              className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}
            >
              Add New
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;