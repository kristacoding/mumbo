import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navagationbar() {

  return (
    <Navbar className="navbar navbar-expand-lg  bg-light">
      <Navbar.Brand>
        Mumbo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
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
              to="/logout"
              className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
            >
              Logout
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navagationbar;