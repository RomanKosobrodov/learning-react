import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

class SettingsForm extends Component {
  state = {
    text: "",
    number: "",
    option: "extra-2"
  };

  options = [
    { key: "extra", text: "Extra", value: "extra-1" },
    { key: "turbo", text: "Turbo", value: "extra-2" },
    { key: "ultra", text: "Ultra", value: "ultra-3" }
  ];

  handleChange = (e, x) => {
    const { name, value } = x;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    const { text, number, option } = this.state;

    return (
      <div>
        <Form onSubmit={this.handleSubmit} error={true} className="dummy">
          <Form.Field width={6}>
            <label>Text Field</label>
            <Input
              name="text"
              type="text"
              value={text}
              placeholder="enter text"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field width={6}>
            <label>Number Field</label>
            <Input
              name="number"
              type="number"
              min="0"
              max="10"
              value={number}
              placeholder="enter number between 0 and 10"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Select
            width={6}
            name="option"
            fluid
            label="Option"
            value={option}
            options={this.options}
            placeholder="Choose a setting from the list"
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SettingsForm;
