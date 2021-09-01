import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../GlobalState";

function FoodDetails() {
  const state = useContext(GlobalState);
  const [foods] = state.allFoodAPI.allfoods;
  const [details, setDetails] = useState([]);
  const [images, setImages] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      foods.forEach((food) => {
        if (food._id === params.id) {
          setDetails(food);
          setImages(food.images);
        }
      });
    }
  }, [params.id, foods]);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-5 border">
          <img
            className="py-2"
            width="100%"
            src={images.url}
            alt={details.name}
          />
        </div>
        <div className="col-lg-7 p-3 px-4 mt-3">
          <h3 className="card-title text-capitalize mb-3"> {details.name} </h3>
          <p className="card-text mb-3"> {details.description} </p>
          <p className="card-text">
            Price:
            <strong className="text-danger fw-bold">৳ {details.price}</strong>
          </p>
          <p className="mb-3">
            Sold: <strong>{details.sold}</strong>
          </p>
          <button className="btn order_btn text-white my-3 px-5 py-2">
            order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
