import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Arrows from "./containers/Arrows";
import Strings from "./containers/Strings";

import Layout from "./hocs/Layout"

const App = () => {
  return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/arrows" component={Arrows} />
            <Route exact path="/strings" component={Strings} />
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;