/* This code snippet is setting up a Redux store for managing the state of a todo list application.
Here's a breakdown of what each part is doing: */
import { createStore } from "redux";
import todoReducer from './todoreducer'

const store = createStore(todoReducer);

export default store;
