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

  const addTodo = useCallback((text: string) => {
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

  const deleteTodo = useCallback((id: number) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  }, []);

  const handleToggleCompleted = useCallback((id: number) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      );
    });
  }, []);

  const changeTodoText = useCallback((id: number, text: string) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.map((t) => (t.id === id ? { ...t, text } : t));
    });
  }, []);

  const toggleCompletedAll = useCallback((completed: boolean) => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.map<ITodoItem>((t: ITodoItem) => ({
        ...t,
        isCompleted: completed,
      }));
    });
  }, []);

  const clearCompleted = useCallback(() => {
    setTodosAll((prevTodos: ITodoItem[]) => {
      return prevTodos.filter((t) => !t.isCompleted);
    });
  }, []);

  const handleFilterAll = useCallback(() => setTodosFilter('all'), []);
  const handleFilterActive = useCallback(() => setTodosFilter('active'), []);
  const handleFilterCompleted = useCallback(
    () => setTodosFilter('completed'),
    [],
  );

  const valueData = useMemo(
    () => ({ todosAll, todosFilter }),
    [todosAll, todosFilter],
  );
  const valueAction = useMemo(
    () => ({
      toggleCompletedAll,
      addTodo,
      deleteTodo,
      handleToggleCompleted,
      changeTodoText,
      handleFilterAll,
      handleFilterActive,
      handleFilterCompleted,
      clearCompleted,
    }),
    [
      toggleCompletedAll,
      addTodo,
      deleteTodo,
      handleToggleCompleted,
      changeTodoText,
      handleFilterAll,
      handleFilterActive,
      handleFilterCompleted,
      clearCompleted,
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
