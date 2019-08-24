import React, { Component } from "react";
import PropTypes from "prop-types";
import InputBox from "./shared/textBox";
import Checkbox from "./shared/checkbox";
import Dropdown from "./shared/selectBox";
import Button from "./shared/button";

const options = [
  { value: 0, label: "text box" },
  { value: 1, label: "date picker" },
  { value: 2, label: "select box" },
  { value: 3, label: "checkbox" },
  { value: 4, label: "normal text" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElement: 4
    };
  }

  /* call props filter  function  */
  applyFilter = () => {
    const { applyFilter } = this.props;
    const { input, currentElement, sort } = this.state;
    applyFilter(input, currentElement, sort);
  };

  /* get value of child components  */
  getValue = (value, field) => {
    this.setState({ [field]: value });
  };

  render() {
    const { value, currentElement } = this.state;
    return (
      <div>
        <h4>Filter your selection</h4>
        <label>Change element type </label>
        <Dropdown
          value={currentElement}
          labelValue="currentElement"
          options={options}
          getValue={this.getValue}
        />
        <InputBox
          label="Filter by text"
          getValue={this.getValue}
          value={value}
        />
        <Checkbox label="sort"  getValue={this.getValue} />
        <Button label="apply changes" onClickFunction={this.applyFilter} />
      </div>
    );
  }
}

App.propTypes = {
  applyFilter: PropTypes.func
};

export default App;
