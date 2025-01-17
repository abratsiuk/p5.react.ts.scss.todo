export interface ITodosActionContext {
  toggleAllTodosCompleted: (completed: boolean) => void;
  createTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodoCompleted: (id: number) => void;
  updateTodoText: (id: number, text: string) => void;
  setFilterAll: () => void;
  setFilterActive: () => void;
  setFilterCompleted: () => void;
  removeCompletedTodos: () => void;
}
