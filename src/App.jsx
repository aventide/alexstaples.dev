import React from "react";
import { Route, Switch } from "wouter";

import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";
import CoverLetter from "./pages/CoverLetter";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import "./App.css";

function App() {
	return (
		<div className="">
			<NavHeader />
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/projects" component={Projects} />
				<Route path="/experience" component={Resume} />
				<Route path="/resume" component={Resume} />
				<Route path="/cover-letter" component={CoverLetter} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
