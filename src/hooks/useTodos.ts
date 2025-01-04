import { useState, useEffect, useRef } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import { getTodosApi, setTodosApi } from '../services';

export const useTodos = (
  key: string,
  initialTodos: ITodoItem[],
): [
  ITodoItem[],
  (todos: ITodoItem[] | ((prevTodos: ITodoItem[]) => ITodoItem[])) => void,
] => {
  const initialTodosRef = useRef(true);
  const [todos, setTodos] = useState<ITodoItem[]>(() => {
    return initialTodos.length ? initialTodos : getTodosApi(key);
  });

  useEffect(() => {
    if (initialTodosRef.current) {
      initialTodosRef.current = false;
      return;
    }
    setTodosApi(key, todos);
  }, [todos, key]);

  return [todos, setTodos];
};
