import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./routes/Home"

export const ArrowPage: FunctionComponent = () => {
    return (
      <BrowserRouter basename={"/customer-center/"}>
        <Switch>
          <React.Suspense fallback={<></>}>
            <Route path="/" exact={true} component={Home} />
          </React.Suspense>
        </Switch>
      </BrowserRouter>
    );
  };