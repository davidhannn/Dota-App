import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavSection from "./components/layout/NavSection";
import Home from "./components/pages/Home";
import Heroes from "./components/pages/Heroes";
import Items from "./components/pages/Items";
import Matches from "./components/pages/Matches";
// import Players from "./components/pages/PlayerSearch";
import PlayerData from "./components/pages/PlayerData";
import DotaState from "./context/DotaState";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

import "./App.css";

const App = () => {
  return (
    <DotaState>
      <Router>
        <Fragment>
          <NavSection />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/heroes" component={Heroes} />
              <Route exact path="/items" component={Items} />
              <Route exact path="/matches/:id" component={Matches} />
              {/* <Route exact path="/players/" component={Players} /> */}
              <Route exact path="/players/:id" component={PlayerData} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </DotaState>
  );
};

export default App;
