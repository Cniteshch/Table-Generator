import React, { Component } from 'react';
import Dropdown from "react-toolbox/lib/dropdown/Dropdown";
import PropTypes from "prop-types";

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
    constructor( props ) {
    super( props );
  this.state = {
    value: this.props.value ,
    options : this.props.options ? this.props.options : [ { value: this.props.value, label: this.props.value }]
  }
}

handleChange = (value) => {
    this.setState({value: value});
    if(this.props.getValue){
      let label = this.props.labelValue ? this.props.labelValue : "dropdown"
      this.props.getValue(value, label) 
} 
  };
   
  render() {
    const {options, value} = this.state
    return (
      <div className="dropdown" >
 <Dropdown 
        auto
        onChange={this.handleChange}
        source={options}
        value={value}
      />
      </div>
    );
  }
}

App.propTypes = {
  getValue: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.number

};

export default App;
