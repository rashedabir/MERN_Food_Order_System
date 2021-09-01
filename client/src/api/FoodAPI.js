import { useEffect, useState } from "react";
import axios from "axios";

function FoodAPI() {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [callback, setCallback] = useState(false);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const getFoods = async () => {
      setLoading(true);
      const res = await axios.get(`/api/food?limit=${page * 8}&${category}`);
      setFoods(res.data.foods);
      setResult(res.data.result);
      setLoading(false);
    };
    getFoods();
  }, [callback, category, page]);

  return {
    loading: [loading, setLoading],
    foods: [foods, setFoods],
    callback: [callback, setCallback],
    page: [page, setPage],
    result: [result, setResult],
    category: [category, setCategory],
  };
}

export default FoodAPI;
