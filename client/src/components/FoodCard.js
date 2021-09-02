import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";

function FoodCard({ food }) {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  return (
    <div className="col">
      <div className="card">
        <img
          height="250px"
          src={food.images.url}
          className="card-img-top"
          alt={food.name}
        />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{food.name}</h5>
          <p className="card-text desc">{food.description}</p>
          <p className="card-text text-danger fw-bold">৳ {food.price}</p>
          <div className="d-flex me-3">
            <Link
              to={`/food_details/${food._id}`}
              className="col-6 btn view_btn mx-1 text-white"
            >
              view
            </Link>
            {isLogged ? (
              <Link
                to={`/edit_food/${food._id}`}
                className="col-6 btn btn-danger edit_btn mx-1 text-white"
              >
                edit
              </Link>
            ) : (
              <Link
                to={`/order/${food._id}`}
                className="col-6 btn order_btn mx-1 text-white"
              >
                order
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
