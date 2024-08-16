/* The code snippet is importing necessary modules and functions from various libraries in JavaScript.
Here's what each import statement is doing: */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/todoactions";

/**
 * The `FilterButtons` component in JavaScript uses Redux hooks to dispatch filterTodos action based on
 * the current filter state.
 */
const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

/* This code snippet defines a React functional component called `FilterButtons`. Inside the component,
it returns JSX elements that represent a div containing a select dropdown and a button. Here's a
breakdown of what the JSX elements are doing: */
  return (
    <div className="flex space-x-4 items-center">
      <div className="relative">
        <select
          className="text-sm px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-sm transition duration-300 ease-in-out"
          value={currentFilter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="COMPLETED">Completed</option>
          <option value="INCOMPLETE">Incomplete</option>
        </select>
      </div>

      <button
        className="text-sm px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg shadow-lg hover:bg-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300 ease-in-out"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
