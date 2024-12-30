import { TTodosState } from '../../types/TTodosState';
export interface ITodosToggleProps {
  todosState: TTodosState;
  onToggleCompletedAll: (completed: boolean) => void;
}
