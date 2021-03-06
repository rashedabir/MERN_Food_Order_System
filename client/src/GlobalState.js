import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import UserAPI from "./api/UserAPI";
import CategoryAPI from "./api/CategoryAPI";
import FoodAPI from "./api/FoodAPI";
import AllFoodAPI from "./api/AllFoodAPI";
import AdminAPI from "./api/AdminAPI";
import FeaturedAPI from "./api/FeaturedAPI";
import OrdersAPI from "./api/OrdersAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const refreshToken = async () => {
    const res = await axios.get(
      "https://hungrynaki.herokuapp.com/user/refresh_token"
    );
    setToken(res.data.accessToken);
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const state = {
    token: [token, setToken],
    userAPI: UserAPI(token),
    categoryAPI: CategoryAPI(),
    foodsAPI: FoodAPI(),
    allFoodAPI: AllFoodAPI(),
    adminAPI: AdminAPI(token),
    featuredAPI: FeaturedAPI(),
    ordersAPI: OrdersAPI(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
