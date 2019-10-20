import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ThingDetails from "../components/ThingDetails";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path='/thing/:id' component={ThingDetails} />
    </Switch>
  </Router>
);