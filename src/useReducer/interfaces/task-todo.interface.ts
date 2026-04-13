import type { Todo } from "./todo.interface";

export interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}