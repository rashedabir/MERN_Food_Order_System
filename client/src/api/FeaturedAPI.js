import axios from "axios";
import { useEffect, useState } from "react";

function FeaturedAPI() {
  const [featured, setFeatured] = useState([]);
  const [callback, setCallback] = useState(false);
  const [loading, setLoading] = useState(false);

  const getFeatured = async () => {
    setLoading(true);
    const res = await axios.get("/api/featured_food");
    setFeatured(res.data.featuredFoods);
    setLoading(false);
  };
  useEffect(() => {
    getFeatured();
  }, [callback]);

  return {
    featured: [featured, setFeatured],
    callback: [callback, setCallback],
    loading: [loading, setLoading],
  };
}

export default FeaturedAPI;
