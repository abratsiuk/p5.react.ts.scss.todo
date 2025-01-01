import { useState, useEffect } from 'react';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { useLocalStorageSync } from './useLocalStorageSync';

export const useTodosSync = (
  key: string,
  initialTodos: ITodoItem[],
): [ITodoItem[], (todos: ITodoItem[]) => void] => {
  const [storageString, setStorageString] = useLocalStorageSync(
    key,
    initialTodos ? JSON.stringify(initialTodos) : '[]',
  );

  const [todos, setTodos] = useState<ITodoItem[]>(() => {
    return initialTodos.length
      ? initialTodos
      : storageString
        ? JSON.parse(storageString)
        : [];
  });

  useEffect(() => {
    setStorageString(todos ? JSON.stringify(todos) : '[]');
  }, [todos, setStorageString]);

  return [todos, setTodos];
};
