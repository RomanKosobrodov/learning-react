import React, { Component } from 'react';
import HomePage from '../pages/Home';
import PageOne from '../pages/PageOne';
import PageTwo from '../pages/PageTwo';
import MenuComponent from './Menu';
import FooterComponent from './Footer';

import {Container} from "semantic-ui-react";


import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () =>
  <Router >
    <div className="application-container dark">
      <MenuComponent />
      <Container textAlign="left" className="container-content dark">
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
      <FooterComponent />  
    </div>
  </Router>

export default App;