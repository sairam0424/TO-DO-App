import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  markCompleted,
  markIncomplete,
  updateTodo,
} from "../redux/actions";
import { MdCheckCircle, MdCancel, MdEdit, MdDelete } from "react-icons/md";

/**
 * This function defines a TodoItem component in JavaScript that allows editing and saving of todo
 * items.
 */
const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(updateTodo(index, editedTitle, editedDescription));
    setIsEditing(false);
  };

/* This code snippet is defining the JSX structure of a `TodoItem` component in React. It represents
the visual representation of a single todo item in a todo list. */
  return (
    <div
      className={`flex flex-col p-5 mb-4 rounded-lg shadow-lg transition-transform transform ${
        todo.completed
          ? "bg-gray-200 text-gray-600 opacity-80"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center mb-3">
          <div className="flex items-start sm:items-center">
            <span className="text-2xl font-semibold text-gray-700 mr-4">
              {index + 1}.
            </span>
            <div className="flex flex-col">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="mb-2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Description"
                  />
                </>
              ) : (
                <>
                  <span
                    className={`text-xl font-medium mb-1 ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.title}
                  </span>
                  <span
                    className={`text-sm ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-600"
                    }`}
                  >
                    {todo.description}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          {!todo.completed && (
            <button
              className="p-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => dispatch(markCompleted(index))}
              aria-label="Mark as completed"
            >
              <MdCheckCircle size={20} />
            </button>
          )}
          {todo.completed && (
            <button
              className="p-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => dispatch(markIncomplete(index))}
              aria-label="Mark as incomplete"
            >
              <MdCancel size={20} />
            </button>
          )}
          <button
            className="p-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={() => dispatch(removeTodo(index))}
            aria-label="Delete todo"
          >
            <MdDelete size={20} />
          </button>
          {isEditing ? (
            <button
              className="p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleSaveClick}
              aria-label="Save changes"
            >
              Save
            </button>
          ) : (
            <button
              className="p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={handleEditClick}
              aria-label="Edit todo"
            >
              <MdEdit size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
