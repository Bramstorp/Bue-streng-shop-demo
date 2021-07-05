import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { ArrowPage } from "../modules/ArrowPage";

export const ArrowRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/arrows" exact={true} component={ArrowPage} />
    </Switch>
  );
};
