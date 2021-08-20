import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./screens/Login";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Switch>
          <Route exact path="/admin" component={Login} />
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default App;
