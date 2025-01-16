import { useState, useMemo, useCallback } from 'react';
import { FC, PropsWithChildren } from 'react';
import { TodosDataContext } from './TodosDataContext';
import { TodosActionContext } from './TodosActionContext';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { TTodosState } from '../../types/TTodosState';
import { TTodosFilter } from '../../types/TTodosFilter';
import { ITodosKindsNumber } from '../../interfaces/ITodosKindsNumber';
import { useTodos } from '../../hooks/useTodos';

export const TodosProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useTodos('todos', []);
  const [todosFilter, setTodosFilter] = useState<TTodosFilter>('all');

  const filtered = useMemo<ITodoItem[]>(() => {
    switch (todosFilter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((t) => !t.isCompleted);
      case 'completed':
        return todos.filter((t) => t.isCompleted);
    }
  }, [todos, todosFilter]);

  const todosKindsNumber = useMemo<ITodosKindsNumber>(() => {
    const all = todos.length;
    const completed =
      all > 0
        ? todos.reduce((completed, todo) => {
            return completed + (todo.isCompleted ? 1 : 0);
          }, 0)
        : 0;
    const active = all - completed;
    return { all, active, completed };
  }, [todos]);

  const todosState = useMemo<TTodosState>(() => {
    if (todosKindsNumber.all == 0) {
      return 'empty';
    } else if (todosKindsNumber.active > 0 && todosKindsNumber.completed == 0) {
      return 'allActive';
    } else if (todosKindsNumber.active > 0 && todosKindsNumber.completed > 0) {
      return 'anyActive-anyCompleted';
    } else if (todosKindsNumber.active == 0 && todosKindsNumber.completed > 0) {
      return 'allCompleted';
    }
    return 'empty';
  }, [todosKindsNumber]);

  const addTodo = useCallback(
    (text: string) => {
      setTodos((prevTodos: ITodoItem[]) => {
        return [
          ...prevTodos,
          {
            id: Date.now(),
            text,
            isCompleted: false,
          },
        ];
      });
    },
    [setTodos],
  );

  const deleteTodo = useCallback(
    (id: number) => {
      setTodos((prevTodos: ITodoItem[]) => {
        return prevTodos.filter((t) => t.id !== id);
      });
    },
    [setTodos],
  );

  const handleToggleCompleted = useCallback(
    (id: number) => {
      setTodos((prevTodos: ITodoItem[]) => {
        return prevTodos.map((t) =>
          t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
        );
      });
    },
    [setTodos],
  );

  const changeTodoText = useCallback(
    (id: number, text: string) => {
      setTodos((prevTodos: ITodoItem[]) => {
        return prevTodos.map((t) => (t.id === id ? { ...t, text } : t));
      });
    },
    [setTodos],
  );

  const toggleCompletedAll = useCallback(
    (completed: boolean) => {
      setTodos((prevTodos: ITodoItem[]) => {
        return prevTodos.map<ITodoItem>((t: ITodoItem) => ({
          ...t,
          isCompleted: completed,
        }));
      });
    },
    [setTodos],
  );

  const clearCompleted = useCallback(() => {
    setTodos((prevTodos: ITodoItem[]) => {
      return prevTodos.filter((t) => !t.isCompleted);
    });
  }, [setTodos]);

  const handleFilterAll = useCallback(() => setTodosFilter('all'), []);
  const handleFilterActive = useCallback(() => setTodosFilter('active'), []);
  const handleFilterCompleted = useCallback(
    () => setTodosFilter('completed'),
    [],
  );

  const valueData = useMemo(
    () => ({ todosState, filtered, todosKindsNumber, todosFilter }),
    [todosState, filtered, todosKindsNumber, todosFilter],
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
    <TodosDataContext.Provider value={valueData}>
      <TodosActionContext.Provider value={valueAction}>
        {children}
      </TodosActionContext.Provider>
    </TodosDataContext.Provider>
  );
};
