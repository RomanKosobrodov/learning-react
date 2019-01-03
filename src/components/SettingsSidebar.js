import React, { Component } from "react";
import { Header, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Route, Link, Switch } from "react-router-dom";
import SettingsForm from "../components/SettingsForm";

const SettingOne = () => (
  <div>
    <Header as="h3">One</Header>
    <SettingsForm />
  </div>
);

class SettingsSidebar extends Component {
  render() {
    const matched = this.props.match.path;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            icon="labeled"
            inverted
            vertical
            visible={true}
            width="thin"
          >
            <Link className="menu item" to="/options/opt1">
              <Icon name="home" />
              Option 1
            </Link>
            <Link className="menu item" to="/options/opt2">
              <Icon name="gamepad" />
              Option 2
            </Link>
            <Link className="menu item" to="/options/opt3">
              <Icon name="camera" />
              Option 3
            </Link>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Switch>
                <Route exact path={`${matched}/opt1`} component={SettingOne} />
                <Route
                  exact
                  path={`${matched}/opt2`}
                  component={() => (
                    <div>
                      <Header as="h3">Two</Header>
                      <SettingsForm />
                    </div>
                  )}
                />
                <Route
                  exact
                  path={`${matched}/opt3`}
                  component={() => (
                    <div>
                      <Header as="h3">Three</Header>
                      <SettingsForm />
                    </div>
                  )}
                />
                <Route component={SettingOne} />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default SettingsSidebar;
