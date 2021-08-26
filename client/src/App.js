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
          path="/edit_food/:id"
          component={isLogged ? AddFoods : NotFound}
        />
      </Switch>
    </Router>
  );
}

export default App;
