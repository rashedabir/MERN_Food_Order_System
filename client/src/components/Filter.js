import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";

function Filter({ search, setSearch }) {
  const state = useContext(GlobalState);
  const [categories] = state.categoryAPI.categories;

  const [category, setCategory] = state.foodsAPI.category;

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-lg-3 d-flex align-items-center px-1 my-2">
          <span>Filters: </span>
          <select
            className="form-control mx-1 text-capitalize"
            name="category"
            value={category}
            onChange={handleCategory}
          >
            <option value="">All Foods</option>
            {categories.map((category) => (
              <option value={"category=" + category.name} key={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-9 my-2">
          <input
            type="text"
            value={search}
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
