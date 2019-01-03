import React, { Component } from "react";
import SettingsSidebar from "../components/SettingsSidebar";
import { Route } from "react-router-dom";

class Options extends Component {
  render() {
    return (
      <div>
        <Route path={this.props.match.path} component={SettingsSidebar} />
      </div>
    );
  }
}

export default Options;
