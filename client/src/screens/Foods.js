import React, { useContext, useState } from "react";
import Filter from "../components/Filter";
import FoodCard from "../components/FoodCard";
import LoadMore from "../components/LoadMore";
import { GlobalState } from "../GlobalState";

function Foods() {
  const state = useContext(GlobalState);
  const [foods] = state.foodsAPI.foods;
  const [loading] = state.foodsAPI.loading;
  const [search, setSearch] = useState("");

  const handleSearch = foods.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Filter setSearch={setSearch} search={search} />
      <div className="container mt-5">
        {loading ? (
          "Loading..."
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
            {handleSearch.length ? (
              handleSearch.map((food) => <FoodCard food={food} />)
            ) : (
              <h4>" {search} "Not Found</h4>
            )}
          </div>
        )}
      </div>
      <LoadMore />
      {foods.length === 0 && "Loading..."}
    </div>
  );
}

export default Foods;
