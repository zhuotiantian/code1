import React, { Component } from "react";
class App extends Component {
  handleClick = () => {
    this.props.addTodo(this.props.text);
  };
  handleChange = e => {
    this.props.setTodoText(e.target.value);
  };
  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>添加</button>
      </div>
    );
  }
}
export default App;
