import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ALKEMY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/home"
            >
              Equipo
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Heroes
            </NavLink>
          </ul>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link btn"
            exact
            to="/login"
          >
            SALIR
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
