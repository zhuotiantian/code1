import React, { Component } from "react";
class Todo extends Component {
  handleClick = e => {
    this.props.toggleTodo(e);
  };
  render() {
    const { completed, text, id } = this.props;
    return (
      <li style={{ textDecoration: completed ? "line-through" : "none" }} onClick={this.handleClick.bind(this, id)}>
        {text}
      </li>
    );
  }
}
export default Todo;
