import { TodoItem } from '../Todo/TodoItem';

export interface TodoShowProps {
  todo: TodoItem;
  onDeleteTodo: (id: number) => void;
  onSwitchCompleted: (id: number) => void;
}
