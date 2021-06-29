import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ListRegisters from "../pages/ListRegisters";
import Login from "../pages/Login";
import UserRegister from "../pages/UserRegister";
import CustomRoute from "./Route";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={Dashboard} />
        <CustomRoute path="/users" component={UserRegister} />
        <CustomRoute path="/registers" component={ListRegisters} />
        <CustomRoute path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
