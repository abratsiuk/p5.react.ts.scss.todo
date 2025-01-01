import { TTodosState } from '../../types/TTodosState';
import { TTodosFilter } from '../../types/TTodosFilter';
export interface IToolProps {
  todosLeft: number;
  todosState: TTodosState;
  todosFilter: TTodosFilter;
  onAll: () => void;
  onActive: () => void;
  onCompleted: () => void;
  onClearCompleted: () => void;
}
