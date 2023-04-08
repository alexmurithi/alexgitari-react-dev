import React from "react";
import { Route } from "react-router-dom";

const MainLayoutRoute = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchedProps) => (
        <Layout>
          <Component {...matchedProps}></Component>
        </Layout>
      )}
    />
  );
};
export default MainLayoutRoute;
