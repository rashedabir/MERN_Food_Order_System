import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AllFoodAPI(token) {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getFoods = async () => {
        try {
          setLoading(true);
          const res = await axios.get("/api/allfood", {
            headers: { Authorization: token },
          });
          setFoods(res.data.foods);
          setLoading(false);
        } catch (error) {
          toast.error(error.response.data.msg);
        }
      };
      getFoods();
    }
  }, [token]);

  return {
    loading: [loading, setLoading],
    allfoods: [foods, setFoods],
    callback: [callback, setCallback],
  };
}

export default AllFoodAPI;
