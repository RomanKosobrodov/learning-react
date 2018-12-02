import React, { Component } from "react";
import HomePage from "../pages/Home";
import Options from "../pages/Options";
import Settings from "../pages/Settings";
import MenuComponent from "./Menu";

import { Container } from "semantic-ui-react";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path={this.props.match.path}
          component={() => <h3>Home main</h3>}
        />
        <Route
          path={`${this.props.match.path}/one`}
          component={() => <h3>Home one</h3>}
        />
        <Route
          path={`${this.props.match.path}/two`}
          component={() => <h3>Home two</h3>}
        />
      </div>
    );
  }
}

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

// const App = () => (
//   <Router>
//     <div>
//       <Route exact path="/" component={() => <h3>Root</h3>} />
//       <Route path="/login" component={() => <h3>Login</h3>} />
//       <Route path="/home" component={Home} />
//       <Route path="/about" component={() => <h3>About</h3>} />
//     </div>
//   </Router>
// );

export default App;
