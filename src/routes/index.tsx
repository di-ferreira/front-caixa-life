import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "../pages/Login";
import CustomRoute from "./Route";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
