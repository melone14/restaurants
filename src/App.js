import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/city/:city">
            <City />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
