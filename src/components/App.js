import React, { Component } from 'react';
import HomePage from '../pages/Home';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import MenuComponent from './Menu';

import {Container} from "semantic-ui-react";


import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>
  <Router >
    <div>
      <MenuComponent />
      <Container textAlign="left">
        <Route exact path="/"
          component={() => <HomePage />}
        />
        <Route exact path="/one"
          component={() => <PageOne />}
        />
        <Route exact path="/two"
          component={() => <PageTwo />}
        />
        </Container>
    </div>
  </Router>

export default App;