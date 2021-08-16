import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/admin" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
