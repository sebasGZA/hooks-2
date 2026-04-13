import * as z from 'zod/v4';

import { taskStateSchema, type TaskState } from "../interfaces/task-todo.interface";
import type { Todo } from "../interfaces/todo.interface";
import type { TaskAction } from "../types/action.type";

const getPendingTodos = (todos: Todo[]) => {
    return todos.filter(todo => !todo.completed);
};

const getCompletedTodos = (todos: Todo[]) => {
    return todos.filter(todo => todo.completed);
}

export const getTaskInitialState = (): TaskState => {
    const todosLocalStorage = localStorage.getItem('task-state');

    if (!todosLocalStorage)
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        };

    const tasksState = JSON.parse(todosLocalStorage);
    const result = taskStateSchema.safeParse(
        tasksState
    );
    if (result.error) {
        console.error(result.error.message);
        return {
            todos: [],
            completed: 0,
            pending: 0,
            length: 0
        };
    }

    return tasksState;
};

export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {

    switch (action.type) {
        case 'ADD_TODO':

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            const newTodoList = [...state.todos, newTodo];

            return {
                ...state,
                todos: newTodoList,
                length: state.todos.length + 1,
                pending: state.pending + 1,
                completed: getCompletedTodos(newTodoList).length,
            };

        case 'TOOGLE_TODO':
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload)
                    return { ...todo, completed: !todo.completed };
                return todo;
            });

            return {
                ...state,
                todos: updatedTodos,
                pending: getPendingTodos(updatedTodos).length,
                completed: getCompletedTodos(updatedTodos).length,
            };

        case "DELETE_TODO":
            const currentTodos = state.todos.filter(todo => todo.id !== action.payload);
            return {
                ...state,
                todos: currentTodos,
                length: state.length - 1,
                pending: getPendingTodos(currentTodos).length,
                completed: getCompletedTodos(currentTodos).length
            };

        default:

            return state;
    };
}