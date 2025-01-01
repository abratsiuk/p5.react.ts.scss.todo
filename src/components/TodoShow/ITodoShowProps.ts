import { ITodoItem } from '../../interfaces/ITodoItem';

export interface ITodoShowProps {
  todo: ITodoItem;
  onDeleteTodo: (id: number) => void;
  onToggleCompleted: (id: number) => void;
}
