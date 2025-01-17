export interface ITodosActionContext {
  toggleAllTodosCompleted: (completed: boolean) => void;
  createTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodoCompleted: (id: number) => void;
  updateTodoText: (id: number, text: string) => void;
  handleFilterAll: () => void;
  handleFilterActive: () => void;
  handleFilterCompleted: () => void;
  removeCompletedTodos: () => void;
}
