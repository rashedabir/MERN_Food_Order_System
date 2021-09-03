import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GlobalState } from "../GlobalState";

function OrderDetails() {
  const state = useContext(GlobalState);
  const [orders] = state.ordersAPI.orders;
  const [details, setDetails] = useState([]);
  const [cart, setCart] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      orders.forEach((order) => {
        if (order._id === params.id) {
          setDetails(order);
          setCart(order.cart);
        }
      });
    }
  }, [params.id, orders]);

  return (
    <div className="container">
      <div className="my-5">
        <h3 className="text-center">Customer Details</h3>
        <div className="mt-4 table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-capitalize">
                <th scope="row">{details.name}</th>
                <td>{details.phone}</td>
                <td>{details.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-center">Food Details</h3>
        <div className="mt-4 table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((c) => (
                  <tr className="text-capitalize">
                    <th scope="row">{c.name}</th>
                    <td>
                      <img
                        className="order_img"
                        src={c.images.url}
                        alt={c.name}
                      />
                    </td>
                    <td>{details.quantity}</td>
                    <td className="text-danger fw-bold">৳ {details.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
