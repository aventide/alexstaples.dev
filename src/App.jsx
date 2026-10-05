import { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ResumeTailor from "./pages/ResumeTailor";

import "./App.css";

function App() {
	const [location] = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: scroll to top whenever the route changes
	useLayoutEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [location]);

	return (
		<>
			<NavHeader />
			<Switch>
				<Route path="/" component={Home} />
				<Route path="/projects" component={Projects} />
				<Route path="/resume-tailor" component={ResumeTailor} />
				<Route path="/experience" component={Resume} />
				<Route path="/resume" component={Resume} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
