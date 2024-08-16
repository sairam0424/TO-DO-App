import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from "./ActionTypes";
/* The line `const initialState = { todos: [], filter: "ALL", searchTerm: "" };` is initializing the
initial state for the todo list application. It defines an object `initialState` with three
properties: */
const initialState = { todos: [], filter: "ALL", searchTerm: "" };

/**
 * The todoReducer function in JavaScript handles various actions related to managing a todo list
 * state.
 * @param [state] - The `state` parameter in the `todoReducer` function represents the current state of
 * the todo application. It includes the list of todos, the current filter applied to the todos, and
 * the search term used for filtering todos. The initial state is typically defined outside of the
 * reducer function and passed as the
 * @param action - The `action` parameter in the `todoReducer` function represents the action that is
 * dispatched to the reducer. It contains information about the action type and any payload data that
 * needs to be processed by the reducer function. The reducer uses the action type to determine how to
 * update the state based on the action
 * @returns The todoReducer function returns a new state object based on the action type provided.
 * Depending on the action type, it updates the todos array with new todo items or modifies existing
 * todo items. It also updates the filter and searchTerm properties in the state object accordingly. If
 * the action type is not recognized, it returns the current state unchanged.
 */
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? {
                ...todo,
                title: action.payload.title || todo.title,
                description: action.payload.description || todo.description,
              }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER_TODOS:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    default:
      return state;
  }
};

export default todoReducer;
