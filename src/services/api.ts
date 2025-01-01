import { ITodoItem } from '../interfaces/ITodoItem';

export const getTodosApi = (key: string): ITodoItem[] => {
  const todos = localStorage.getItem(key);
  console.log('read', todos);
  return todos ? JSON.parse(todos) : [];
};

export const setTodosApi = (key: string, todos: ITodoItem[] = []): void => {
  localStorage.setItem(key, todos ? JSON.stringify(todos) : '[]');
  console.log('write', todos);
};
