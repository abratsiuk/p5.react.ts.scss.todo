import { ITodoItem } from './ITodoItem';

export interface ITodosHook {
  todos: ITodoItem[];
  setTodos: (todos: ITodoItem[]) => void;
}
