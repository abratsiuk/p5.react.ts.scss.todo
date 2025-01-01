import { ITodoItem } from './ITodoItem';
export interface ITodoProps {
  todo: ITodoItem;
  onDeleteTodo: (id: number) => void;
  onSwitchCompleted: (id: number) => void;
  onChangeTodoText: (id: number, text: string) => void;
}
