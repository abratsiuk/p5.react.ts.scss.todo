import { TTodosState } from '../../types/TTodosState';
import { TTodosFilter } from '../../types/TTodosFilter';
export interface ToolProps {
  todosLeft: number;
  todosState: TTodosState;
  todosFilter: TTodosFilter;
  onAll: () => void;
  onActive: () => void;
  onCompleted: () => void;
  onClearCompleted: () => void;
}
