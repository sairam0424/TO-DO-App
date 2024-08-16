import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/actions";

/**
 * The Todo function defines state variables and a function to add a new todo item using Redux
 * dispatch.
 */
const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (title, description) => {
    dispatch(addTodo({ title, description }));
  };

  /**
   * The function `handleAddTodoClick` checks if the new todo title is not empty, then adds a new todo
   * with the trimmed title and description, and resets the input fields.
   */
  const handleAddTodoClick = () => {
    if (newTodoTitle.trim() !== "") {
      handleAddTodo(newTodoTitle.trim(), newTodoDescription.trim());
      setNewTodoTitle("");
      setNewTodoDescription("");
    }
  };

  /**
   * The function `handleSearchChange` updates the search term value and dispatches an action to update
   * the search term.
   * @param value - The `value` parameter in the `handleSearchChange` function is the new search term
   * that the user has entered in the search input field.
   */
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

 /* The `return` statement in the `Todo` component is rendering the JSX elements that make up the user
 interface for a personal TODO app. Here's a breakdown of what each part of the JSX code is doing: */
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-6 bg-gradient-to-r from-teal-300 to-indigo-300 rounded-lg shadow-lg">
      <h2 className="mt-3 mb-6 text-4xl font-extrabold text-center text-gray-900">
        Personal TODO APP
      </h2>

      <div className="flex flex-col sm:flex-row items-center mb-6 gap-4">
        <input
          id="addTodoTitle"
          className="flex-grow p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 shadow-sm transition duration-300 ease-in-out"
          type="text"
          placeholder="Add Todo Title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <input
          id="addTodoDescription"
          className="flex-grow p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 shadow-sm transition duration-300 ease-in-out"
          type="text"
          placeholder="Add Todo Description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
        <button
          className="p-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg shadow-md hover:shadow-xl focus:outline-none transition duration-300 ease-in-out"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={24} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <FilterButtons />
        <div className="flex items-center">
          <input
            className="flex-grow p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 shadow-sm transition duration-300 ease-in-out"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-lg shadow-md hover:shadow-xl focus:outline-none transition duration-300 ease-in-out">
            <BsSearch size={24} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
