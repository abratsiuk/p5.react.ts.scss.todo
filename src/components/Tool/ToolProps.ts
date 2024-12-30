import { TTodosToggle } from '../../types/TTodosToggle';
export interface ToolProps {
  todosLeft: number;
  TodosToggle: TTodosToggle;
  onAll: () => void;
  onActive: () => void;
  onCompleted: () => void;
  onClearCompleted: () => void;
}
