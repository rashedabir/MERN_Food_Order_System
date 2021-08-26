import axios from "axios";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import AuthRoute from "./AuthRoute";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;

  const logOut = async () => {
    await axios.get("/user/logout");
    setIsLogged(false);
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <i className="fas fa-hamburger logo me-2"></i>{" "}
        <h3 className="mt-2">Hungry Naki</h3>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          {isLogged ? null : (
            <>
              <NavLink
                className="nav-item nav-link"
                to="/foods"
                activeClassName="selected"
              >
                Foods
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/service"
                activeClassName="selected"
              >
                Services
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/about"
                activeClassName="selected"
              >
                About
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/login"
                activeClassName="selected"
              >
                Contact us
              </NavLink>
            </>
          )}
          {isLogged ? <AuthRoute logOut={logOut} /> : null}
        </div>
      </div>
    </nav>
  );
}

export default Header;
