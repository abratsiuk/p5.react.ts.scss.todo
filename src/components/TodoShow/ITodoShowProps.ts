import { ITodoItem } from '../../interfaces/ITodoItem';

export interface ITodoShowProps {
  todo: ITodoItem;
  onDeleteTodo: (id: number) => void;
  onSwitchCompleted: (id: number) => void;
}
