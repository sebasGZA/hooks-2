import * as z from 'zod/v4';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const todoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});