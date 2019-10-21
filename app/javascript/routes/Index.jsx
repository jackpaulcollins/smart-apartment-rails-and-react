import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ThingsWeNeed from "../components/ThingsWeNeed"
import ThingDetails from "../components/ThingDetails";
import NewThing from "../components/NewThing";

export default (
  <Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/things" exact component={ThingsWeNeed} />
    <Route path="/thing/:id" exact component={ThingDetails} />
    <Route path="/thing" exact component={NewThing} />
  </Switch>
</Router>
);