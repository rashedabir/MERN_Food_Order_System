import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import OrderCard from "../components/OrderCard";
import OrderForm from "../components/OrderForm";
import { GlobalState } from "../GlobalState";

function FoodOrder() {
  const state = useContext(GlobalState);
  const [foods] = state.allFoodAPI.allfoods;
  const [details, setDetails] = useState([]);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  var [qty, setQty] = useState(1);
  const params = useParams();
  const price = parseFloat(details.price) * qty;
  const history = useHistory();
  const [callback, setCallback] = state.ordersAPI.callback;

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

  const increament = () => {
    setQty(qty + 1);
  };
  const decrement = () => {
    qty === 1 ? (qty = 1) : setQty(qty - 1);
  };

  const orderForm = async () => {
    try {
      await axios.post("https://hungrynaki.herokuapp.com/api/order", {
        name: name,
        cart: details,
        phone: phone,
        address: address,
        quantity: qty,
        price: price,
      });
      history.push("/");
      toast.success("Order Success");
      setCallback(!callback);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container mb-5">
      <OrderCard
        qty={qty}
        details={details}
        images={images}
        increament={increament}
        decrement={decrement}
      />
      <OrderForm
        setName={setName}
        name={name}
        setPhone={setPhone}
        phone={phone}
        address={address}
        setAddress={setAddress}
        orderForm={orderForm}
      />
    </div>
  );
}

export default FoodOrder;
