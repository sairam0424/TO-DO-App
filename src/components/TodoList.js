import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

/**
 * The TodoList function filters todos based on completion status and search term.
 */
const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.title.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

 /* The `return` statement in the `TodoList` function is returning JSX (JavaScript XML) code that
 represents the UI structure of the component. */
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Your To-Do List
      </h2>
      <ul className="space-y-4">
        {filteredTodos.length === 0 ? (
          <li className="text-gray-500 text-center">No tasks available.</li>
        ) : (
          filteredTodos.map((todo, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <TodoItem todo={todo} index={index} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
