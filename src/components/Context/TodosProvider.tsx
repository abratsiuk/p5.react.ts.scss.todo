import { useState, useMemo, useCallback } from 'react';
import { FC, PropsWithChildren } from 'react';
import { TodosDataContext } from './TodosDataContext';
import { TodosActionContext } from './TodosActionContext';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { TTodosFilter } from '../../types/TTodosFilter';
import { useTodos } from '../../hooks/useTodos';

export const TodosProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todosAll, setTodosAll] = useTodos();
  const [todosFilter, setTodosFilter] = useState<TTodosFilter>('all');

  const createTodo = useCallback((text: string) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return [
        ...prevTodos,
        {
          id: Date.now(),
          text,
          isCompleted: false,
        },
      ];
    });
  }, []);

  const removeTodo = useCallback((id: number) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  }, []);

  const toggleTodoCompleted = useCallback((id: number) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      );
    });
  }, []);

  const updateTodoText = useCallback((id: number, text: string) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.map((t) => (t.id === id ? { ...t, text } : t));
    });
  }, []);

  const toggleAllTodosCompleted = useCallback((completed: boolean) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.map<ITodoItem>((t: ITodoItem) => ({
        ...t,
        isCompleted: completed,
      }));
    });
  }, []);

  const removeCompletedTodos = useCallback(() => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.filter((t) => !t.isCompleted);
    });
  }, []);

  const setFilterAll = useCallback(() => setTodosFilter('all'), []);
  const setFilterActive = useCallback(() => setTodosFilter('active'), []);
  const setFilterCompleted = useCallback(() => setTodosFilter('completed'), []);

  const valueData = useMemo(
    () => ({ todosAll, todosFilter }),
    [todosAll, todosFilter],
  );
  const valueAction = useMemo(
    () => ({
      toggleAllTodosCompleted,
      createTodo,
      removeTodo,
      toggleTodoCompleted,
      updateTodoText,
      setFilterAll,
      setFilterActive,
      setFilterCompleted,
      removeCompletedTodos,
    }),
    [
      toggleAllTodosCompleted,
      createTodo,
      removeTodo,
      toggleTodoCompleted,
      updateTodoText,
      setFilterAll,
      setFilterActive,
      setFilterCompleted,
      removeCompletedTodos,
    ],
  );

  return (
    <TodosActionContext.Provider value={valueAction}>
      <TodosDataContext.Provider value={valueData}>
        {children}
      </TodosDataContext.Provider>
    </TodosActionContext.Provider>
  );
};
