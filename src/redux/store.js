/* This code snippet is setting up a Redux store using the `@reduxjs/toolkit` library in a JavaScript
application. */
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
export default store;