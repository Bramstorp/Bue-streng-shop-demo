import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { StringRoutes } from "./StringPages/StringRoutes";
import { ArrowRoutes } from "./ArrowPages/ArrowRoutes";

import { Homepage } from "./HomePage/HomePage";
import { NotFound } from "./NotFound";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Homepage} />
          <Route path="/strings" exact={true} component={StringRoutes} />
          <Route path="/arrows" exact={true} component={ArrowRoutes} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
