import React from "react";

function SearchOption() {
  return (
    <div className="container-fluid home p-0">
      <div className="card bg-dark text-white">
        <img
          src="https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?k=20&m=1165399909&s=612x612&w=0&h=5g5C4BDoxaejlIr4r_8cV6jDYXzN8n1-JkIW3LgPUuA="
          className="card-img"
          alt=""
        />
        <div className="card-img-overlay row search">
          <div className="col-lg-10">
            <input
              className="form-control w-100"
              type="text"
              placeholder="Search...."
            />
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success w-100 search-btn">search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchOption;
