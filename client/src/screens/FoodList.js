import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../GlobalState";

function FoodList() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [foods] = state.allFoodAPI.allfoods;
  const [callback, setCallback] = state.allFoodAPI.callback;

  const deleteFood = async (id, name) => {
    if (window.confirm(`Want to Delete ${name}`)) {
      await axios.delete(`/api/food/${id}`, {
        headers: { Authorization: token },
      });
      setCallback(!callback);
      toast.error(`${name} Deleted`);
    }
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-10">
          <h3 className="my-2">Foods List</h3>
        </div>
        <div className="col-lg-2">
          <Link
            to="/addfoods"
            className="btn btn-success w-100 my-2 p-2 text-uppercase"
          >
            <i className="fas fa-plus mx-1"></i> add Food
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">status</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Featured</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {foods &&
              foods.map((food) => (
                <tr>
                  <th scope="row">
                    {food.status === true ? "Active" : "Deactive"}
                  </th>
                  <td>{food.name}</td>
                  <td>
                    <img width="100px" src={food.images.url} alt="" />
                  </td>
                  <td>{food.featured === true ? "True" : "False"}</td>
                  <td>{food.price}</td>
                  <td>
                    <Link
                      to={`/edit_food/${food._id}`}
                      className="fas fa-edit"
                    ></Link>{" "}
                    <i
                      onClick={() => {
                        deleteFood(food._id, food.name);
                      }}
                      className="fas fa-trash"
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodList;
