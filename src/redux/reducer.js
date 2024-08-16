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

// Initial State
/* The `const initialState` declaration is setting up the initial state for the todo application. It
defines an object with three properties: `todos`, `filter`, and `searchTerm`. */
const initialState = { todos: [], filter: "ALL", searchTerm: "" };

// Utility Functions
/**
 * The above functions are related to managing a todo list state in a Redux application, including
 * adding, toggling, removing, updating, marking as completed or incomplete, filtering, updating search
 * term, and marking all as completed.
 * @param state - `state` represents the current state of the application, which includes the list of
 * todos, the current filter applied to the todos, and the search term being used to filter todos.
 * @param action - An action is an object that describes what should change in the application's state.
 * It typically contains a `type` property that specifies the type of action being performed and may
 * also include additional data needed to update the state.
 */
/**
 * The `addTodo` function adds a new todo item to the state with a title, description, and completion
 * status.
 * @param state - The `state` parameter in the `addTodo` function is an object that contains the
 * current state of the application. It includes the following properties:
 * @param action - The `action` parameter typically represents an object that contains information
 * about the action being dispatched in a Redux application. It usually has a `type` property to
 * indicate the type of action and a `payload` property that carries any additional data needed to
 * update the state.
 */
const addTodo = (state, action) => ({
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
});

/**
 * The `toggleTodo` function toggles the completion status of a specific todo item in the state object.
 * @param state - The `state` parameter in the `toggleTodo` function likely represents the current
 * state of the application, which includes an array of todos, a filter for displaying todos, and a
 * search term for filtering todos.
 * @param action - The `action` parameter typically contains information about the action being
 * dispatched, such as the type of action and any additional data needed to update the state. In this
 * case, the `action` parameter likely contains an object with a `type` property indicating the type of
 * action being performed and a `payload
 */
const toggleTodo = (state, action) => ({
  todos: state.todos.map((todo, index) =>
    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
  ),
  filter: state.filter,
  searchTerm: state.searchTerm,
});

/**
 * The `removeTodo` function removes a todo item from the state based on the provided action payload
 * id.
 * @param state - The `state` parameter in the `removeTodo` function likely represents the current
 * state of the application, which includes the list of todos, the current filter applied to the todos,
 * and the search term being used to filter todos.
 * @param action - The `action` parameter typically represents an object that contains information
 * about the action being dispatched in a Redux application. It usually includes a `type` property to
 * identify the action type and may also contain additional data in a `payload` property to provide
 * information needed to update the state. In the context of
 */
const removeTodo = (state, action) => ({
  todos: state.todos.filter((_, index) => index !== action.payload.id),
  filter: state.filter,
  searchTerm: state.searchTerm,
});

/**
 * The updateTodo function updates a specific todo item in the state based on the action payload.
 * @param state - The `state` parameter in the `updateTodo` function likely represents the current
 * state of the application, which includes an array of todos, a filter value, and a search term.
 * @param action - The `action` parameter typically represents an object that contains information
 * about the action being dispatched in a Redux application. It usually includes a `type` property to
 * identify the action type and may also contain additional data relevant to the action, such as a
 * payload.
 */
const updateTodo = (state, action) => ({
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
});

/**
 * The function `markCompleted` updates the `completed` property of a todo item in the state based on
 * the action payload id.
 * @param state - The `state` parameter in the `markCompleted` function likely represents the current
 * state of the application, which includes an array of todos, a filter value, and a search term.
 * @param action - The `action` parameter typically represents an object that contains information
 * about the action being dispatched in a Redux application. It usually includes a `type` property to
 * identify the action type and may also contain additional data in the `payload` property to provide
 * necessary information for the action. In the provided code snippet
 */
const markCompleted = (state, action) => ({
  todos: state.todos.map((todo, index) =>
    index === action.payload.id ? { ...todo, completed: true } : todo
  ),
  filter: state.filter,
  searchTerm: state.searchTerm,
});

/**
 * The function `markIncomplete` updates a specific todo item to be incomplete based on the action
 * payload id.
 * @param state - The `state` parameter in the `markIncomplete` function likely represents the current
 * state of the application, which includes an array of todos, a filter value, and a search term.
 * @param action - The `action` parameter typically represents an object that contains information
 * about the action being dispatched in a Redux application. It usually includes a `type` property to
 * identify the action type and may also contain additional data in the `payload` property to provide
 * necessary information for the action. In the context of the
 */
const markIncomplete = (state, action) => ({
  todos: state.todos.map((todo, index) =>
    index === action.payload.id ? { ...todo, completed: false } : todo
  ),
  filter: state.filter,
  searchTerm: state.searchTerm,
});

/**
 * The `filterTodos` function returns a new state object with updated filter value based on the action
 * payload.
 * @param state - The `state` parameter likely contains the current state of the application, including
 * properties such as `todos`, `filter`, and `searchTerm`. It represents the current data and state of
 * the application before any changes are made.
 * @param action - The `action` parameter typically represents an object that contains information
 * about the action being dispatched in a Redux application. It usually has a `type` property that
 * describes the action type and may also contain additional data in the `payload` property. In the
 * context of your `filterTodos` function, the
 */
const filterTodos = (state, action) => ({
  todos: state.todos,
  filter: action.payload.filter,
  searchTerm: state.searchTerm,
});

/**
 * The function `updateSearchTerm` updates the `searchTerm` property in the state object with the value
 * provided in the `action` payload.
 * @param state - The `state` parameter likely represents the current state of your application or a
 * specific part of the state that includes `todos`, `filter`, and `searchTerm`.
 * @param action - The `action` parameter typically represents an object that contains information
 * about the action being dispatched in a Redux application. In this specific context, the `action`
 * parameter seems to have a `payload` property which in turn contains a `searchTerm` property. The
 * `searchTerm` is likely the new
 */
const updateSearchTerm = (state, action) => ({
  todos: state.todos,
  filter: state.filter,
  searchTerm: action.payload.searchTerm,
});
/**
 * The function `markAllCompleted` updates all todos in the state to be marked as completed.
 * @param state - The `state` parameter in the `markAllCompleted` function seems to be an object that
 * contains the following properties:
 */

const markAllCompleted = (state) => ({
  todos: state.todos.map((todo) => ({ ...todo, completed: true })),
  filter: state.filter,
  searchTerm: state.searchTerm,
});

// Action Handlers Map
/* The `const actionHandlers` object is creating a mapping between action types and corresponding
handler functions in the todoReducer. Each key in the object corresponds to an action type constant,
and the value associated with each key is a function that handles the state update logic for that
specific action type. */
const actionHandlers = {
  [ADD_TODO]: addTodo,
  [TOGGLE_TODO]: toggleTodo,
  [REMOVE_TODO]: removeTodo,
  [UPDATE_TODO]: updateTodo,
  [MARK_COMPLETED]: markCompleted,
  [MARK_INCOMPLETE]: markIncomplete,
  [FILTER_TODOS]: filterTodos,
  [UPDATE_SEARCH_TERM]: updateSearchTerm,
  [MARK_ALL_COMPLETED]: markAllCompleted,
};

// Main Reducer Function
/**
 * The todoReducer function is a reducer in JavaScript that handles actions based on their type using
 * actionHandlers.
 * @param [state] - The `state` parameter in the `todoReducer` function represents the current state of
 * the application. It is typically an object that contains the data and the state of the application
 * that needs to be updated based on the actions dispatched to the reducer.
 * @param action - The `action` parameter in the `todoReducer` function represents an object that
 * typically contains a `type` property indicating the type of action to be performed and any
 * additional data needed to update the state in the reducer function. It is an action object
 * dispatched from the application to trigger a state change in
 * @returns The todoReducer function is returning the result of calling the handler function for the
 * given action type on the state and action, or it returns the current state if no handler is found
 * for the action type.
 */
const todoReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default todoReducer;
