export interface ToolProps {
  todosLeft: number;
  onAll: () => void;
  onActive: () => void;
  onCompleted: () => void;
  onClearCompleted: () => void;
}
