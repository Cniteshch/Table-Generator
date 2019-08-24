import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import InputBox from "./shared/textBox";
import DatePicker from "./shared/date";
import Dropdown from "./shared/selectBox";
import Checkbox from "./shared/checkbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElement: 4
    };
  }

  /* get values from object and render  */
  renderColumns() {
    const { item } = this.props;
    let ValuesArray = _.values(item);
    return ValuesArray.map((value, index) => {
      return <td key={index}>{this.renderElementType(value, index)}</td>;
    });
  }

  /* render element based on selection  */
  renderElementType(value, index) {
    const { changeElement } = this.props;
    let type = changeElement[index] !== undefined ? changeElement[index] : 4;
    switch (type) {
      case 0:
        return <InputBox key={value} value={value} />;
      case 1:
        return <DatePicker key={value} value={value} />;
      case 2:
        return <Dropdown key={value} value={value} />;
      case 3:
        return <Checkbox key={value} label={value} />;
      default:
        return value;
    }
  }

  render() {
    const { currentElement } = this.state;
    const { item } = this.props;
    return <tr key={currentElement || item}>{this.renderColumns()}</tr>;
  }
}

App.propTypes = {
  index: PropTypes.number,
  changeElement: PropTypes.object,
  item: PropTypes.object
};

export default App;
