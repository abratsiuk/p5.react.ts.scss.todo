import { TodoItem } from '../components/Todo/TodoItem';

export const getTodosApi = (): TodoItem[] => {
  const todos = localStorage.getItem('todos');
  console.log('read', todos);
  return todos ? JSON.parse(todos) : [];
};

export const setTodosApi = (todos: TodoItem[] = []): void => {
  localStorage.setItem('todos', todos ? JSON.stringify(todos) : '[]');
  console.log('write', todos);
};
