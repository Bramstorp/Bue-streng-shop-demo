import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./Main"

function App() {
  return (
    <BrowserRouter basename={"/"}>
    <Switch>
      <React.Suspense fallback={<></>}>
        <Route path="/" exact={true} component={Home} />
      </React.Suspense>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
