import React from "react";
import { Route, Switch } from "wouter";

import NavHeader from "./components/NavHeader";
import Resume from "./components/Resume";
import CoverLetter from "./components/CoverLetter";

import "./App.css";

function App() {
  return (
    <div className="">
      <NavHeader />
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/cover-letter" component={CoverLetter} />
      </Switch>
    </div>
  );
}

export default App;
