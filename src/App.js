import React, { Suspense } from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Loader from "./Components/Loader";
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
};

export default App;
