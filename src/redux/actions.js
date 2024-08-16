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
/**
 * These functions are action creators for managing todo items in a Redux application.
 * @param todo - The `todo` parameter represents a single todo item that you want to add to your todo
 * list. It typically includes properties like `id`, `title`, `description`, and `completed`.
 */

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const updateTodo = (id, title, description) => ({
  type: UPDATE_TODO,
  payload: { id, title, description },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
