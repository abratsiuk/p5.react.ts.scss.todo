import { useState, useEffect } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import { getTodosApi, setTodosApi } from '../services';

export const useTodos = (
  key: string,
  initialTodos: ITodoItem[],
): [ITodoItem[], (todos: ITodoItem[]) => void] => {
  const [todos, setTodos] = useState<ITodoItem[]>(() => {
    return initialTodos.length ? initialTodos : getTodosApi(key);
  });

  useEffect(() => {
    setTodosApi(key, todos);
  }, [todos, key]);

  return [todos, setTodos];
};
