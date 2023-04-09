import React, { lazy } from "react";
import { Switch } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

const MainLayoutRoute = lazy(() =>
  import("./Components/RouteLayouts/MainLayoutRoute")
);

const Main = lazy(() => import("./Pages/Main"));

const Routes = () => {
  return (
    <Switch>
      <MainLayoutRoute path="/" exact component={Main} layout={MainLayout} />
    </Switch>
  );
};

export default Routes;
