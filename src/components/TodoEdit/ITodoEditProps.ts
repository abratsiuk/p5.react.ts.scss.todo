export interface ITodoEditProps {
  text: string;
  onEditTodo: (text: string) => void;
  onCancelEditing: () => void;
}
