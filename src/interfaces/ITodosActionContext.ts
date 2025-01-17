export interface ITodosActionContext {
  toggleCompletedAll: (completed: boolean) => void;
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  handleToggleCompleted: (id: number) => void;
  changeTodoText: (id: number, text: string) => void;
  handleFilterAll: () => void;
  handleFilterActive: () => void;
  handleFilterCompleted: () => void;
  clearCompleted: () => void;
}
