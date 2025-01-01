import { useState, useEffect } from 'react';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { getTodosApi, setTodosApi } from '../../services';
import { ITodosHook } from './ITodosHook';

export const useTodos = (initialTodos: ITodoItem[]): ITodosHook => {
  const [todos, setTodos] = useState<ITodoItem[]>(() => {
    return initialTodos.length ? initialTodos : getTodosApi();
  });

  useEffect(() => {
    setTodosApi(todos);
  }, [todos]);

  return { todos, setTodos };
};
