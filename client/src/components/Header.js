import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    dispatch(logout());
    history.push("/");
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
          {user.auth ? (
            <button className="btn btn-danger" onClick={logOut}>
              Log out
            </button>
          ) : (
            <NavLink
              className="nav-item nav-link"
              to="/admin"
              activeClassName="selected"
            >
              Contact us
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
