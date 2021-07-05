import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StringRoutes } from "./StringPages/StringRoutes";
import { ArrowRoutes } from "./ArrowPages/ArrowRoutes";

import { Home } from "./Main";
import { NotFound } from "./NotFound"

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/strings" exact={true} component={StringRoutes} />
        <Route path="/arrows" exact={true} component={ArrowRoutes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
