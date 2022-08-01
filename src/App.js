import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "./components/layout/pre";
import Header from "./components/layout/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import Particle from "./components/particle";
import "./App.css";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Header />
        <Particle/>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          
        </Switch>
      </div>
    </Router>
  );
}
