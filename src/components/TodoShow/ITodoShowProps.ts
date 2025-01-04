import { ITodoItem } from '../../interfaces/ITodoItem';

export interface ITodoShowProps extends ITodoItem {
  onDeleteTodo: (id: number) => void;
  onToggleCompleted: (id: number) => void;
}
