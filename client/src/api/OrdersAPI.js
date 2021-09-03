import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function OrdersAPI(token) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getOrders = async () => {
        try {
          setLoading(true);
          const res = await axios.get("/api/order", {
            headers: { Authorization: token },
          });
          setOrders(res.data.orderList);
          setLoading(false);
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      getOrders();
    }
  }, [token, callback]);

  return {
    orders: [orders, setOrders],
    loading: [loading, setLoading],
    callback: [callback, setCallback],
  };
}

export default OrdersAPI;
