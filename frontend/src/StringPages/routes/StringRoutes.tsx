import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { StringPage } from "../modules/StringPage";

export const StringRoutes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/string" exact={true} component={StringPage} />
    </Switch>
  );
};
