import { TodoItem } from '../Todo/TodoItem';
export interface TodoProps {
  todo: TodoItem;
  onDeleteTodo: (id: number) => void;
  onSwitchCompleted: (id: number) => void;
}
