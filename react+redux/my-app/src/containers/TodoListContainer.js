import { connect } from "react-redux";
import { toggleTodo, fetchTodos } from "../actions/index";
import TodoList from "../components/TodoList";
import { getVisibleTodos } from "../selectors/index";

/**
 * 把redux中的state映射到react组件中的props上
 */
const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});
/**
 * 把组件中需要使用的action方法映射到props中
 */
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: () => dispatch(fetchTodos())
});
/**
 * connect未一个高阶组件，生成一个与redux链接的容器型组件
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
