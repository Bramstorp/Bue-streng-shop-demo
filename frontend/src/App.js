import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./containers/Homepage";
import ArrowPage from "./containers/ArrowPage";
import StringPage from "./containers/StringPage";

import Layout from "./hocs/Layout"

const App = () => {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/arrows" component={ArrowPage} />
            <Route exact path="/strings" component={StringPage} />
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;