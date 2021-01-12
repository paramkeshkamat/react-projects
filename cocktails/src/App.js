import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Cocktails from "./pages/Cocktails";
import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/cocktails/:id" component={Cocktails} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
