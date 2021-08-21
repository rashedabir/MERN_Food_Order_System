import { useEffect, useState } from "react";
import axios from "axios";

function FoodAPI() {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getFoods = async () => {
      setLoading(true);
      const res = await axios.get("/api/food");
      setFoods(res.data.foods);
      setLoading(false);
    };
    getFoods();
  }, []);

  return {
    loading: [loading, setLoading],
    foods: [foods, setFoods],
    callback: [callback, setCallback],
  };
}

export default FoodAPI;
