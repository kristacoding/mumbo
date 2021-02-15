import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
      <Navbar.Brand>
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
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul class="navbar-nav">
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
              to="/profile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              Saved Searches
          </Link>
          </li>
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
              to="/logout"
              className={window.location.pathname === "/form" ? "nav-link active" : "nav-link"}
            >
              Logout
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;