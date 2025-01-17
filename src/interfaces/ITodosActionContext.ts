export interface ITodosActionContext {
  toggleCompletedAll: (completed: boolean) => void;
  createTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  handleToggleCompleted: (id: number) => void;
  changeTodoText: (id: number, text: string) => void;
  handleFilterAll: () => void;
  handleFilterActive: () => void;
  handleFilterCompleted: () => void;
  clearCompleted: () => void;
}
