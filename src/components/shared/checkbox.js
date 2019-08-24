import React, { Component } from "react";
import Checkbox from "react-toolbox/lib/checkbox/Checkbox";
import PropTypes from "prop-types";
/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      label: this.props.label ? this.props.label : "checkbox"
    };
  }

  handleChange = (field, value) => {
    this.setState({ ...this.state, [field]: value });
    if (this.props.getValue) {
      this.props.getValue(value, this.props.label);
    }
  };

  render() {
    return (
      <div>
        <Checkbox
          checked={this.state.check1}
          className="checkbox"
          label={this.state.label}
          onChange={this.handleChange.bind(this, "check1")}
        />
      </div>
    );
  }
}

App.propTypes = {
  getValue: PropTypes.func,
  label: PropTypes.string
};

export default App;
