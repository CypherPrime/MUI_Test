import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//components import
import NavBar from "./components/NavBar";

// page import
import LandingPage from "./views/LandingPage";

ReactDOM.render(
  <div>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />

        {/* <Route path="/career" component={Career} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} /> */}
      </Switch>
      {/* <DefaultFooter /> */}
    </Router>
  </div>,
  document.getElementById("root")
);
