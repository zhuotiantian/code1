import React, { Component } from "react";
class App extends Component {
  handleClick = e => {
    this.props.setFilter(e);
  };
  render() {
    const { filter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button disabled={filter === "all"} onClick={this.handleClick.bind(this, "all")}>
          All
        </button>
        <button disabled={filter === "active"} onClick={this.handleClick.bind(this, "active")}>
          Active
        </button>
        <button disabled={filter === "completed"} onClick={this.handleClick.bind(this, "completed")}>
          Completed
        </button>
      </div>
    );
  }
}
export default App;
