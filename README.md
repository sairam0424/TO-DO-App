# Todo Application

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [High Level architecture](#HLD)
- [Features](#features)
- [State Management](#state-management)
- [Color Palette](#colors)


## Introduction

A React-Redux todo application where users can manage tasks by adding, editing, deleting, and marking them as completed.

## Demo

![screenshot](./src/Screenshot.png)
![screenshot](./src/Screenshot.png)
![screenshot](./src/Screenshot.png)
![screenshot](./src/Screenshot.png)
![screenshot](./src/Screenshot.png)


The application provides a simple and intuitive interface for managing tasks efficiently. You can try adding tasks,and checking them off once completed.

## Run

To run this application, you need to set up your environment and install the necessary modules. Below are the steps to get started:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required modules using the command:
   ```bash
   npm install
   npm start


## Technology

The application is built with:

-React version 18.0.0
-Redux Toolkit version 1.7.0
-React-Redux version 7.2.6
-React Router DOM version 6.0.2
-React Bootstrap version 2.0.0
-Tailwind css

High Level architecture:

1. High-Level Architecture
Frontend (React)
UI Layer: Components for user interface rendering.
State Management: Redux for managing global state.
Styling: CSS for styling components.

3. Frontend Architecture
Directory Structure

![screenshot](./src/Screenshot.png)

Key Components
App.js

-The root component that integrates all child components and connects them to the Redux store.
components/

-FilterButtons.js: Provides buttons for filtering tasks by status (e.g., all, active, completed).
-Todo.js: The main component for the Todo feature, responsible for rendering the overall layout.
-TodoItem.js: Represents a single task in the todo list with options to mark as completed, edit, or delete.
-TodoList.js: Handles displaying a list of tasks. It retrieves the todos from Redux state and maps them to TodoItem components.
redux/

-store.js: Configures and initializes the Redux store, combining reducers if necessary.
-todoactions.js: Contains action creators that return action objects to be dispatched (e.g., addTodo, deleteTodo).
-todoActionTypes.js: Defines all action type constants to avoid typos and duplication (e.g., ADD_TODO, DELETE_TODO).
-todoreducer.js: The reducer function that updates the Redux state based on the dispatched actions. It handles actions like adding, editing, and deleting todos.
3. State Management with Redux
todoreducer.js
State Structure:

-javascript
Copy code
{
  todos: [
    {
      id: '1',
      text: 'Learn Redux',
      completed: false,
    },
    // ... more todos
  ],
  filter: 'all', // can be 'all', 'active', 'completed'
}
--Reducers:

-ADD_TODO: Adds a new todo item to the list.
-DELETE_TODO: Removes a todo item from the list.
-TOGGLE_TODO: Toggles the completed status of a todo item.
-SET_FILTER: Sets the current filter for displaying todos.
Actions in todoactions.js:

-addTodo(text): Action to add a new todo.
-deleteTodo(id): Action to delete a specific todo.
-toggleTodo(id): Action to toggle the completion status of a todo.
-setFilter(filter): Action to set the current filter.
4. UI Flow
Main Flow:
Users add, view, and interact with tasks using components in the components/ directory.
Actions dispatched from these components trigger state updates managed by the Redux store via todoreducer.js.
The UI is re-rendered based on the updated state, reflecting changes such as new tasks or filtered views.

## Features

CRUD Operations:

Create: Add new todos with a title and description.
Read: View a list of todos with their current status.
Update: Edit the title, description, and priority of existing todos.
Delete: Remove todos from the list.
Completion Filters:

Filter todos based on their completion status (Completed or Incomplete).
Search Functionality:

Search todos by title or description to quickly find specific tasks.
Animations:

Tailwind CSS for responsive and visually appealing design.

## State Management
The application uses Redux Toolkit for state management. The application’s state includes:

todos: An array of task objects, each containing details like id, text, completed, priority, and dueDate.
Redux actions and reducers manage the state, ensuring that tasks are added, updated, deleted, and persisted effectively.

## Colors

Below is the color palette used in this application:

- ![#478ba2](https://via.placeholder.com/15/478ba2/000000?text=+) `#478ba2`
- ![#b9d4db](https://via.placeholder.com/15/b9d4db/000000?text=+) `#b9d4db`
- ![#e9765b](https://via.placeholder.com/15/e9765b/000000?text=+) `#e9765b`
- ![#f2a490](https://via.placeholder.com/15/f2a490/000000?text=+) `#f2a490`
- ![#de5b6d](https://via.placeholder.com/15/de5b6d/000000?text=+) `#de5b6d`
- ![#18a558](https://via.placeholder.com/15/18a558/000000?text=+) `#18a558`
- ![#f9f7f4](https://via.placeholder.com/15/f9f7f4/000000?text=+) `#f9f7f4`
- ![#202020](https://via.placeholder.com/15/202020/000000?text=+) `#202020`
- ![#474747](https://via.placeholder.com/15/474747/000000?text=+) `#474747`

