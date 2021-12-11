import React, { Component } from "react";
import Todo from "./Todo";
class App extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} />;
        })}
      </ul>
    );
  }
}
export default App;
