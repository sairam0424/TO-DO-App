import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../redux/actions';

const Todo = () => {
    const dispatch = useDispatch();
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoDescription, setNewTodoDescription] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddTodo = (title, description) => {
        dispatch(addTodo({ title, description }));
    };

    const handleAddTodoClick = () => {
        if (newTodoTitle.trim() !== '') {
            handleAddTodo(newTodoTitle.trim(), newTodoDescription.trim());
            setNewTodoTitle('');
            setNewTodoDescription('');
        }
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
            <h2 className="mt-3 mb-6 text-3xl font-bold text-center uppercase text-gray-800">
                Personal TODO APP
            </h2>
            
            <div className="flex items-center mb-6 space-x-4">
                <input
                    id="addTodoTitle"
                    className="flex-grow p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-sm"
                    type="text"
                    placeholder="Add Todo Title"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                />
                <input
                    id="addTodoDescription"
                    className="flex-grow p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-sm"
                    type="text"
                    placeholder="Add Todo Description"
                    value={newTodoDescription}
                    onChange={(e) => setNewTodoDescription(e.target.value)}
                />
                <button
                    className="ml-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
                    onClick={handleAddTodoClick}
                >
                    <BsPlus size={24} />
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <FilterButtons />
                <div className="flex items-center">
                    <input
                        className="flex-grow p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-sm"
                        type="text"
                        placeholder="Search Todos"
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                    />
                    <button
                        className="ml-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg focus:outline-none"
                    >
                        <BsSearch size={24} />
                    </button>
                </div>
            </div>

            <TodoList />
        </div>
    );
};

export default Todo;
