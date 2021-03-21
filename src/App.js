import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./Pages";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/browse">
          <Browse />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
