import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          
          <Route exatc path="/" component={DashBoardRoutes} />
        </Switch>
      </>
    </Router>
  );
};
