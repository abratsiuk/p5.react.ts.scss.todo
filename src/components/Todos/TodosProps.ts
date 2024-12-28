import { TodoItem } from '../Todo/TodoItem';

export interface TodosProps {
  todos: TodoItem[];
  onDeleteTodo: (id: number) => void;
  onSwitchCompleted: (id: number) => void;
  onChangeTodoText: (id: number, text: string) => void;
}
