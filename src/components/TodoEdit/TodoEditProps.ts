export interface TodoEditProps {
  text: string;
  onEditTodo: (text: string) => void;
  onCancelEditing: () => void;
}
