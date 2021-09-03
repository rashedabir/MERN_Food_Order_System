import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";

function OrderList() {
  const state = useContext(GlobalState);
  const [orders] = state.ordersAPI.orders;

  return (
    <div className="container">
      <h3 className="text-center my-4">Order List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr>
                  <th scope="row">
                    {order.status === true ? "Complete" : "Pending"}
                  </th>
                  <td>
                    <Link to={`/view_order/${order._id}`}>{order.name}</Link>
                  </td>
                  <td>{new Date(order.createdAt).toDateString()}</td>
                  <td>
                    <Link to={`/edit_order/${order._id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderList;
