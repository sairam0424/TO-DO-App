/* These lines of code are defining constants in JavaScript using the `export` keyword. Each constant
represents a specific action type that can be dispatched in a Redux application for managing a todo
list. These action types are used to update the state of the application based on user interactions
or other events. By exporting these constants, they can be imported and used in other parts of the
application to ensure consistency and avoid typos when referencing action types. */
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const MARK_INCOMPLETE = "MARK_INCOMPLETE";
export const FILTER_TODOS = "FILTER_TODOS";
export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
