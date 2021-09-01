import React, { useContext } from "react";
import FoodCard from "../components/FoodCard";
import SearchOption from "../components/SearchOption";
import { GlobalState } from "../GlobalState";

function Home() {
  const state = useContext(GlobalState);
  const [featured] = state.featuredAPI.featured;
  const [featuredLoading] = state.featuredAPI.loading;
  const [foods] = state.foodsAPI.foods;
  const [foodsLoading] = state.foodsAPI.loading;

  return (
    <div>
      <SearchOption />
      <div className="container">
        <div className="p-3">
          <h2 className="text-center py-4">Featured</h2>
          {featuredLoading ? (
            "Loading..."
          ) : (
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
              {featured && featured.map((food) => <FoodCard food={food} />)}
            </div>
          )}
        </div>
        <div className="bg-light p-3">
          <h2 className="text-center py-4">Foods</h2>
          {foodsLoading ? (
            "Loading..."
          ) : (
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
              {foods && foods.map((food) => <FoodCard food={food} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
