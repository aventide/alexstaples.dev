import React from "react";
import { Route, Switch } from "wouter";

import CoverLetter from "./components/CoverLetter";
import Home from "./components/Home";
import NavHeader from "./components/NavHeader";
import Resume from "./components/Resume";

import "./App.css";

function App() {
  return (
    <div className="">
      <NavHeader />
      <Switch>
	  	<Route path="/" component={Home} />
	  	<Route path="/resume" component={Resume} />
        <Route path="/cover-letter" component={CoverLetter} />
      </Switch>
    </div>
  );
}

export default App;
