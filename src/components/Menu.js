import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const MenuComponent = () =>
    <Menu inverted>
        <Container>
            <Link className="menu item" to="/">Home</Link>
            <Link className="menu item" to="/one">One</Link>
            <Link className="menu item" to="/two">Two</Link>
        </Container>
    </Menu>

export default MenuComponent;