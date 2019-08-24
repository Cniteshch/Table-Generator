import React, { Component } from "react";
import DatePicker from "react-toolbox/lib/date_picker/DatePicker";
import PropTypes from "prop-types";
/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date2: this.initialDate()
    };
  }

  /* initialise inital value if date  */
  initialDate() {
    const { value } = this.props;
    if (value) {
      return Date.parse(value) ? new Date(value) : new Date();
    }
  }

  handleChange = (field, value) => {
    this.setState({ ...this.state, [field]: value });
  };

  render() {
    return (
      <div>
        <DatePicker
          label="Enter date"
          onChange={this.handleChange.bind(this, "date2")}
          value={this.state.date2}
        />
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.string
};

export default App;
