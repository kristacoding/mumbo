import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <li className="navbar-brand">
        <Link
          to="/"
          className={
            window.location.pathname === "/" || window.location.pathname === "/mumbo"
              ? "nav-link active"
              : "nav-link"
          }
        >
          MUMBO
            </Link>
      </li>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/seo-dashboard"
              className={window.location.pathname === "/seo-dashboard" ? "nav-link active" : "nav-link"}
            >
              SEO Dashboard
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;