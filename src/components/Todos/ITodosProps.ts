import { ITodoItem } from '../../interfaces/ITodoItem';

export interface ITodosProps {
  todos: ITodoItem[];
  onDeleteTodo: (id: number) => void;
  onToggleCompleted: (id: number) => void;
  onChangeTodoText: (id: number, text: string) => void;
}
