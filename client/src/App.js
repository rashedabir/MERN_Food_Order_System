import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./screens/Login";
import { GlobalState } from "./GlobalState";
import Category from "./screens/Category";
import { useContext } from "react";
import FoodList from "./screens/FoodList";
import NotFound from "./screens/NotFound";
import AddFoods from "./screens/AddFoods";
import AdminList from "./screens/AdminList";
import AddAdmin from "./screens/AddAdmin";
import Home from "./screens/Home";
import FoodDetails from "./screens/FoodDetails";
import Foods from "./screens/Foods";
import FoodOrder from "./screens/FoodOrder";
import OrderList from "./screens/OrderList";
import OrderDetails from "./screens/OrderDetails";
import EditOrder from "./screens/EditOrder";
import Dashboard from "./screens/Dashboard";
import Footer from "./components/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={isLogged ? NotFound : Login} />
        <Route
          exact
          path="/categories"
          component={isLogged ? Category : NotFound}
        />
        <Route
          exact
          path="/foodlist"
          component={isLogged ? FoodList : NotFound}
        />
        <Route
          exact
          path="/addfoods"
          component={isLogged ? AddFoods : NotFound}
        />
        <Route
          exact
          path="/admin"
          component={isLogged ? AdminList : NotFound}
        />
        <Route
          exact
          path="/addadmin"
          component={isLogged ? AddAdmin : NotFound}
        />
        <Route
          exact
          path="/dashboard"
          component={isLogged ? Dashboard : NotFound}
        />
        <Route
          exact
          path="/updateadmin/:id"
          component={isLogged ? AddAdmin : NotFound}
        />
        <Route
          exact
          path="/edit_food/:id"
          component={isLogged ? AddFoods : NotFound}
        />
        <Route
          exact
          path="/order_list"
          component={isLogged ? OrderList : NotFound}
        />
        <Route
          exact
          path="/view_order/:id"
          component={isLogged ? OrderDetails : NotFound}
        />
        <Route
          exact
          path="/edit_order/:id"
          component={isLogged ? EditOrder : NotFound}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/food_details/:id" component={FoodDetails} />
        <Route exact path="/foods" component={Foods} />
        <Route exact path="/order/:id" component={FoodOrder} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
