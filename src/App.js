import React, { Component } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { makeData, filterAndSort } from "./functions/index";
import Pagination from "./components/paginate";
import Row from "./components/row";
import FilterComponent from "./components/filterComponent";

/* generating array objects
  change data to test here
*/
const data = makeData();

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      header: Object.keys(data[0]),
      currentList: [],
      currentPage: null,
      totalPages: null,
      modal: false,
      changeElement: {},
      shouldUpdate: false
    };
  }

  /* open filter modal  */
  openFilter(property, index) {
    this.setState({
      modal: true,
      activeProperty: property,
      activeIndex: index
    });
  }

  /* apply filter based on selection  */
  applyFilter = (text, currentElement, sort) => {
    const {
      activeProperty,
      changeElement,
      activeIndex,
      shouldUpdate
    } = this.state;
    this.setState({
      data: filterAndSort(data, text, activeProperty, sort),
      modal: false,
      shouldUpdate: !shouldUpdate,
      changeElement: { changeElement, [activeIndex]: currentElement }
    });
  };

  /* hide filter modal */
  hide() {
    this.setState({ modal: false });
  }
  
  /*  pagination change page event */
  onPageChanged = page => {
    const { data } = this.state;
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage - 1) * pageLimit;
    const currentList = data.length
      ? data.slice(offset, offset + pageLimit)
      : [];
    this.setState({ currentPage, currentList, totalPages, offset });
  };

  /* render table header   */
  renderTableHeader() {
    const { header } = this.state;
    return header.map((value, index) => {
      return (
        <th key={index}>
          {value}
          {"   "}
          <i
            onClick={() => this.openFilter(value, index)}
            className="fa fa-filter"
          /> 
        </th>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <Rodal
          width={435}
          height={345}
          visible={this.state.modal}
          onClose={this.hide.bind(this)}
        >
          <div>
            <FilterComponent
              key={this.state.activeIndex}
              applyFilter={this.applyFilter}
            />
          </div>
        </Rodal>
        {this.state.currentList.length ? (
          <p>
            Showing {this.state.offset + 1} -
            {this.state.offset + this.state.currentList.length}
          </p>
        ) : (
          "No results found"
        )}
        <Pagination
          key={this.state.shouldUpdate}
          totalRecords={this.state.data.length}
          pageLimit={20}
          pageNeighbours={1}
          onPageChanged={this.onPageChanged}
        />
        <p>click on filter icon to filter</p>
        <table id="table">
          <tbody>
            <tr key={this.state.offset}>{this.renderTableHeader()}</tr>
            {this.state.currentList.map((item, index) => {
              return (
                <Row
                  changeElement={this.state.changeElement}
                  key={index || this.state.offset || item}
                  item={item}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
