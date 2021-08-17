import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./screens/Login";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./actions/userActions";
import axios from "axios";
import { useEffect } from "react";
import NotFound from "./screens/NotFound";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const refreshToken = async () => {
      const res = await axios.get("/user/refresh_token");
      dispatch(getToken(res.data));
    };
    refreshToken();
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/admin" component={user.auth ? NotFound : Login} />
      </Switch>
    </Router>
  );
}

export default App;
