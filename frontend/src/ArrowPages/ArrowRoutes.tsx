import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { ArrowPage } from "./modules/ArrowPage";

export const ArrowRoutes: FunctionComponent = () => {
  let { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}`} exact={true} component={ArrowPage} />
    </Switch>
  );
};
