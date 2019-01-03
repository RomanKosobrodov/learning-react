import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

function configurationParameter(param, value, handler) {
  const { name, type } = param;
  const keyString = `${name}${type}`;

  if (type === "select") {
    const options = param.options.map(opt => {
      return { key: opt, text: opt, value: opt };
    });
    return (
      <Form.Select
        key={keyString}
        width={6}
        name="option"
        fluid
        label="Option"
        value={value}
        options={options}
        placeholder="Choose a setting from the list"
        onChange={handler}
      />
    );
  } else {
    return (
      <Form.Field key={keyString} width={6}>
        <label>{name}</label>
        <Input
          name={name}
          type={type}
          value={value}
          placeholder={`enter ${type}`}
          onChange={handler}
        />
      </Form.Field>
    );
  }
}

class ConfigurationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    for (let x of this.props.config) {
      this.state[x.name] = x.value;
    }
  }

  handleChange = (e, x) => {
    const { name, value } = x;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Form onSubmit={this.handleSubmit} error={true}>
          {this.props.config.map(element =>
            configurationParameter(
              element,
              this.state[element.name],
              this.handleChange
            )
          )}
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

export default ConfigurationForm;

{
  /* <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre> */
}
