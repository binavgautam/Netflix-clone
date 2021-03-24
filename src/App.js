import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./Pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path="/browse">
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect user={user} loggedInPath="/browse" path="/signin">
          <SignIn />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath="/browse" path="signup">
          <SignUp />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath="/browse" path="/">
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
