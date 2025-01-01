import { ITodoItem } from './ITodoItem';
export interface ITodoProps {
  todo: ITodoItem;
  onDeleteTodo: (id: number) => void;
  onToggleCompleted: (id: number) => void;
  onChangeTodoText: (id: number, text: string) => void;
}
