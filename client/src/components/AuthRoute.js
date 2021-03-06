import React from "react";
import { NavLink } from "react-router-dom";

function AuthRoute({ logOut }) {
  return (
    <>
      <NavLink
        className="nav-item nav-link"
        to="/dashboard"
        activeClassName="selected"
      >
        Dashboard
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/foodlist"
        activeClassName="selected"
      >
        Foods
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/categories"
        activeClassName="selected"
      >
        Categories
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/order_list"
        activeClassName="selected"
      >
        Orders
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/admin"
        activeClassName="selected"
      >
        Admins
      </NavLink>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          logOut();
        }}
      >
        Log out
      </button>
    </>
  );
}

export default AuthRoute;
