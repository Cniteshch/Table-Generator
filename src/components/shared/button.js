import React, { Component } from "react";
import Button from "react-toolbox/lib/button/Button";
import PropTypes from "prop-types";
/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label ? this.props.label : "Tap here"
    };
  }

  onClickFunction() {
    const { onClickFunction } = this.props;
    if (onClickFunction) {
      onClickFunction();
    }
  }

  render() {
    const { label } = this.state;
    return (
      <div>
        <Button
          className="button"
          label={label}
          onClick={() => this.onClickFunction()}
          raised
          primary
        />
      </div>
    );
  }
}

App.propTypes = {
  onClickFunction: PropTypes.func,
  label: PropTypes.string
};

export default App;
