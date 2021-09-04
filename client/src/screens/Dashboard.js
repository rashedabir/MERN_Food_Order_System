import React, { useContext } from "react";
import DashboardCard from "../components/DashboardCard";
import { GlobalState } from "../GlobalState";

function Dashboard() {
  const state = useContext(GlobalState);
  const [admin] = state.adminAPI.admins;
  const totalAdmin = admin.length;
  const [foods] = state.allFoodAPI.allfoods;
  const allFood = foods.length;
  const [category] = state.categoryAPI.categories;
  const allCategory = category.length;
  const [featured] = state.featuredAPI.featured;
  const allFeatured = featured.length;
  const [active] = state.foodsAPI.foods;
  const activeFood = active.length;
  const [orders] = state.ordersAPI.orders;
  const totalOrders = orders.length;
  let pending = 0;

  orders.forEach((order) => {
    if (order.status === false) {
      pending++;
    }
  });

  const amounts = orders.map(
    (order) => order.status === true && parseFloat(order.price)
  );
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const complete = totalOrders - pending;

  const value = [
    {
      id: 1,
      class: "card bg-primary text-white",
      name: "all food",
      length: allFood,
    },
    {
      id: 2,
      class: "card bg-secondary text-white",
      name: "categories",
      length: allCategory,
    },
    {
      id: 3,
      class: "card bg-warning text-white",
      name: "featured",
      length: allFeatured,
    },
    {
      id: 4,
      class: "card bg-light",
      name: "Active",
      length: activeFood,
    },
    {
      id: 5,
      class: "card bg-success text-white",
      name: "Complete",
      length: complete,
    },
    {
      id: 6,
      class: "card bg-danger text-white",
      name: "pending",
      length: pending,
    },
    {
      id: 7,
      class: "card bg-dark text-white",
      name: "revenue",
      length: "৳ " + total,
    },
    {
      id: 8,
      class: "card bg-info text-white",
      name: "Admin",
      length: totalAdmin,
    },
  ];

  console.log(state);

  return (
    <div className="container">
      <h2 className="my-4 bg-light p-3">
        <i className="fas fa-tachometer-alt mx-1"></i>Dashboard
      </h2>
      <div className="row">
        {value.map((value) => (
          <DashboardCard value={value} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
