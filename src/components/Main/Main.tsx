import React, { useState, useMemo, useCallback } from 'react';
import { TodoNew } from '../TodoNew';
import { Todos } from '../Todos';
import { Tool } from '../Tool';
import './Main.scss';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { TTodosState } from '../../types/TTodosState';
import { TTodosFilter } from '../../types/TTodosFilter';
import { TodosToggle } from '../TodosToggle';
import { ITodosCount } from '../../interfaces/ITodosCount';
import { useTodos } from '../../hooks/useTodos';

export const Main = () => {
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

  const count = useMemo<ITodosCount>(() => {
    const allCount = todos.length;
    const completedCount =
      allCount > 0
        ? todos.reduce((completed, todo) => {
            return completed + (todo.isCompleted ? 1 : 0);
          }, 0)
        : 0;
    const activeCount = allCount - completedCount;
    return { all: allCount, active: activeCount, completed: completedCount };
  }, [todos]);

  const todosState = useMemo<TTodosState>(() => {
    if (count.all == 0) {
      return 'empty';
    } else if (count.active > 0 && count.completed == 0) {
      return 'allActive';
    } else if (count.active > 0 && count.completed > 0) {
      return 'anyActive-anyCompleted';
    } else if (count.active == 0 && count.completed > 0) {
      return 'allCompleted';
    }
    return 'empty';
  }, [count]);

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

  return (
    <div className="Main">
      <TodosToggle
        todosState={todosState}
        onToggleCompletedAll={toggleCompletedAll}
      />
      <TodoNew onAddTodo={addTodo} />
      <Todos
        todos={filtered}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={handleToggleCompleted}
        onChangeTodoText={changeTodoText}
      />
      <Tool
        todosLeft={count.active}
        todosState={todosState}
        todosFilter={todosFilter}
        onAll={handleFilterAll}
        onActive={handleFilterActive}
        onCompleted={handleFilterCompleted}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};
