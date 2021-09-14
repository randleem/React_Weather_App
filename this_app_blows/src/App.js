import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Start from "./Components/Start/Start";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/start">
          <Start />
        </Route>
        <h1>hello</h1>
        <Route path="/cp1"></Route>
        <Route path="/cp2"></Route>
        <Route path="/cp3"></Route>
        <Route path="/cp4"></Route>
        <Route path="/cp5"></Route>
        <Route path="/cp6"></Route>
        <Route path="/cp7"></Route>
        <Route path="/cp8"></Route>
        <Route path="/cp9"></Route>
        <Route path="/cp10"></Route>
        <Route path="/cp11"></Route>
        <Route path="/end"></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
