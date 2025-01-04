export interface ITodoEditProps {
  text: string;
  onConfirmEditing: (text: string) => void;
  onCancelEditing: () => void;
}
