import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { StringPage } from "../modules/StringPage";

export const StringRoutes: FunctionComponent = () => {
  let { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`} exact={true} component={StringPage} />
    </Switch>
  );
};
