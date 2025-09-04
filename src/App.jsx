import { useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";
import CoverLetter from "./pages/CoverLetter";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import "./App.css";

function App() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

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
