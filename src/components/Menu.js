import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

class MenuComponent extends Component {
  render() {
    return (
      <Menu inverted>
        <Container>
          <Link className="menu item" to="/">
            Home
          </Link>
          <Link className="menu item" to="/options">
            Options
          </Link>
          <Link className="menu item" to="/settings">
            Settings
          </Link>
        </Container>
      </Menu>
    );
  }
}

export default MenuComponent;
