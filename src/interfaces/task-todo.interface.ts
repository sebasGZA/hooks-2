import * as z from 'zod/v4';

import { todoSchema, type Todo } from "./todo.interface";

export interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export const taskStateSchema = z.object({
    todos: z.array(todoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
});