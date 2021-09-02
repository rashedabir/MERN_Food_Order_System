import React from "react";
import { Link } from "react-router-dom";

function OrderCard({ details, images, qty, increament, decrement }) {
  return (
    <div className="order mx-auto border rounded mt-5 p-3 d-flex">
      <img className="rounded" src={images.url} alt={details.name} />
      <div>
        <h5 className="mx-3 text-capitalize">
          Title: <Link to={`/food_details/${details._id}`}>{details.name}</Link>
        </h5>
        <h5 className="mx-3 text-capitalize text-danger">
          <strong>৳ {parseFloat(details.price) * qty}</strong>
        </h5>
        <div className="mx-3">
          <button
            className="btn view_btn text-white fs-6"
            onClick={() => {
              decrement();
            }}
          >
            -
          </button>
          <strong className="mx-3">{qty}</strong>
          <button
            className="btn view_btn text-white fs-6"
            onClick={() => {
              increament();
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
