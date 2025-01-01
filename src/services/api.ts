import { ITodoItem } from '../interfaces/ITodoItem';

export const getTodosApi = (): ITodoItem[] => {
  const todos = localStorage.getItem('todos');
  console.log('read', todos);
  return todos ? JSON.parse(todos) : [];
};

export const setTodosApi = (todos: ITodoItem[] = []): void => {
  localStorage.setItem('todos', todos ? JSON.stringify(todos) : '[]');
  console.log('write', todos);
};
