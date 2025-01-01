import { ITodoItem } from '../../interfaces/ITodoItem';

export interface ITodosHook {
  todos: ITodoItem[];
  setTodos: (todos: ITodoItem[]) => void;
}
