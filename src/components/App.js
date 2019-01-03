import React from "react";
import HomePage from "../pages/Home";
import Options from "../pages/Options";
import Settings from "../pages/Settings";
import MenuComponent from "./Menu";

import { Container } from "semantic-ui-react";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div className="application-container dark">
      <MenuComponent />
      <Container textAlign="left" className="container-content dark">
        <Route exact path="/" component={() => <HomePage />} />
        <Route path="/options" component={Options} />
        <Route exact path="/settings" component={Settings} />
      </Container>
    </div>
  </Router>
);
export default App;
