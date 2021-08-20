import React from "react";
import { NavLink } from "react-router-dom";

function AuthRoute({ logOut }) {
  return (
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
        to="/categories"
        activeClassName="selected"
      >
        Categories
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
