import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./screens/Login";
import { DataProvider } from "./GlobalState";
import Category from "./screens/Category";

function App() {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Switch>
          <Route exact path="/admin" component={Login} />
          <Route exact path="/categories" component={Category} />
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default App;
