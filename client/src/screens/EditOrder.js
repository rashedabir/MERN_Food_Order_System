import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { GlobalState } from "../GlobalState";

function EditOrder() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [orders] = state.ordersAPI.orders;
  const [callback, setCallback] = state.ordersAPI.callback;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState();
  const [id, setId] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id) {
      orders.forEach((order) => {
        if (order._id === params.id) {
          setId(order._id);
          setName(order.name);
          setPhone(order.phone);
          setAddress(order.address);
          setStatus(order.status);
        }
      });
    } else {
      setName("");
      setPhone("");
      setAddress("");
      setStatus();
    }
  }, [params.id, orders]);

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://hungrynaki.herokuapp.com/api/order/${id}`,
        {
          name: name,
          phone: phone,
          address: address,
          status: status,
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.warn("Order Updated");
      setCallback(!callback);
      history.push("/order_list");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="order mx-auto border my-5 p-3 text-center">
        <h3 className="text-center py-5">Update Order</h3>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            disabled
            value={name}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            disabled
            value={phone}
          />
          <label for="floatingInput">Phone</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            disabled
            value={address}
          ></textarea>
          <label for="floatingTextarea2">Address</label>
        </div>
        <div className="form-check-inline">
          <label className="form-label">Status: </label>
          <div className="form-check form-check-inline mx-4">
            <input
              className="form-check-input"
              type="radio"
              value={status}
              checked={status === true}
              onChange={() => {
                setStatus(true);
              }}
            />
            <label className="form-check-label" for="inlineRadio1">
              True
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value={status}
              checked={status === false}
              onChange={() => {
                setStatus(false);
              }}
            />
            <label className="form-check-label" for="inlineRadio2">
              False
            </label>
          </div>
        </div>
        <br />
        <button onClick={handleOrder} className="btn btn-secondary my-3">
          Update
        </button>
      </div>
    </div>
  );
}

export default EditOrder;
