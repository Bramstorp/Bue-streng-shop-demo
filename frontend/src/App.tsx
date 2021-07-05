import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StringRoutes } from "./StringPages/routes/StringRoutes";
import { ArrowRoutes } from "./ArrowPages/routes/ArrowRoutes";


import { Home } from "./Main";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/strings" exact={true} component={StringRoutes} />
        <Route path="/arrows" exact={true} component={ArrowRoutes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
