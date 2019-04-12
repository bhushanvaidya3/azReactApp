import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Topics from "./components/Topics";
import StarWars from "./components/StarWars/StarWars";
import StarCast from "./components/StarWars/StarCast";
import NotFound from "./components/common/NotFound";

ReactDOM.render(
  <Router>
    <App />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/topics" component={Topics} />
      <Route exact path="/starwars" component={StarWars} />
      <Route exact path="/starcast/:id" component={StarCast} />
      <React component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
