import React from "react";
import { Switch } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import MainLayoutRoute from "./Components/RouteLayouts/MainLayoutRoute";
//import pages
import Main from "./Pages/Main";

const Routes = () => {
  return (
    <Switch>
      <MainLayoutRoute path="/" exact component={Main} layout={MainLayout} />
    </Switch>
  );
};

export default Routes;
