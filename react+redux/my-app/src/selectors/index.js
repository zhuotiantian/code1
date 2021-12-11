export const getText = state => state.text;
export const getFilter = state => state.filter;
export const getVisibleTodos = state => {
  const { filter, todos } = state;
  switch (filter) {
    case "all":
      return todos.data;
    case "completed":
      return todos.data.filter(e => e.completed);
    case "active":
      return todos.data.filter(e => !e.completed);
    default:
      return new Error("Unknown filter: " + filter);
  }
};
