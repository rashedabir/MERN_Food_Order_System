import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AllFoodAPI() {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getFoods = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://hungrynaki.herokuapp.com/api/allfood"
        );
        setFoods(res.data.foods);
        setLoading(false);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    getFoods();
  }, [callback]);

  return {
    loading: [loading, setLoading],
    allfoods: [foods, setFoods],
    callback: [callback, setCallback],
  };
}

export default AllFoodAPI;
