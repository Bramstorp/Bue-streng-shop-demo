import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./containers/Homepage";

import Layout from "./hocs/Layout"

const App = () => {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;