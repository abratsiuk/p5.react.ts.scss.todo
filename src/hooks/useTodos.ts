import { useState, useEffect, useRef } from 'react';
import { ITodoItem } from '../interfaces/ITodoItem';
import { getTodosApi, setTodosApi } from '../services';

export const useTodos = (): [
  ITodoItem[],
  (todos: ITodoItem[] | ((prevTodos: ITodoItem[]) => ITodoItem[])) => void,
] => {
  const initialTodosRef = useRef(true);
  const [todos, setTodos] = useState<ITodoItem[]>(getTodosApi());

  useEffect(() => {
    // Skip setTodosApi for the first render
    if (initialTodosRef.current) {
      initialTodosRef.current = false;
      return;
    }
    setTodosApi(todos);
  }, [todos]);

  return [todos, setTodos];
};
