import React, { useState, useEffect } from 'react';
import { TodoNew } from '../TodoNew';
import { Todos } from '../Todos';
import { Tool } from '../Tool';
import './Main.scss';
import { TodoItem } from '../Todo/TodoItem';
import { TTodosState } from '../../types/TTodosState';
import { TTodosFilter } from '../../types/TTodosFilter';
import { TodosToggle } from '../TodosToggle';
import { getTodosApi, setTodosApi } from '../../services';
import { ITodosCount } from '../../interfaces/ITodosCount';

export const Main = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filtered, setFiltered] = useState<TodoItem[]>([]);
  const [todosFilter, setTodosFilter] = useState<TTodosFilter>('all');
  const [todosLeft, setTodosLeft] = useState<number>(0);
  const [todosState, setTodosState] = useState<TTodosState>('empty');
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [count, setCount] = useState<ITodosCount>({
    all: 0,
    active: 0,
    completed: 0,
  });

  const handleAddTodo = (text: string) => {
    const TodoNew: TodoItem = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, TodoNew]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const onToggleComplete = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  };
  const handleChangeTodoText = (id: number, text: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));
  };
  const onToggleCompletedAll = (completed: boolean) => {
    setTodos(todos.map((t) => ({ ...t, isCompleted: completed })));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((t) => !t.isCompleted));
  };

  useEffect(() => {
    setTodos(getTodosApi());
    setIsInitial(false);
  }, []);

  useEffect(() => {
    if (!isInitial) {
      setTodosApi(todos);
    }
  }, [todos, isInitial]);

  useEffect(() => {
    switch (todosFilter) {
      case 'all':
        setFiltered(todos);
        break;
      case 'active':
        setFiltered(todos.filter((t) => !t.isCompleted));
        break;
      case 'completed':
        setFiltered(todos.filter((t) => t.isCompleted));
        break;
    }
  }, [todos, todosFilter]);

  useEffect(() => {
    setCount(() => {
      const allCount = todos.length;
      const completedCount = todos.reduce((completed, todo) => {
        return completed + (todo.isCompleted ? 1 : 0);
      }, 0);
      const activeCount = allCount - completedCount;
      return { all: allCount, active: activeCount, completed: completedCount };
    });
  }, [todos]);

  useEffect(() => {
    setTodosState(() => {
      let newState: TTodosState = 'empty';
      if (count.all == 0) {
        newState = 'empty';
      } else if (count.active > 0 && count.completed == 0) {
        newState = 'allActive';
      } else if (count.active > 0 && count.completed > 0) {
        newState = 'anyActive-anyCompleted';
      } else if (count.active == 0 && count.completed > 0) {
        newState = 'allCompleted';
      }
      return newState;
    });
  }, [count]);

  return (
    <div className="Main">
      <TodosToggle
        todosState={todosState}
        onToggleCompletedAll={onToggleCompletedAll}
      />
      <TodoNew onAddTodo={handleAddTodo} />
      <Todos
        todos={filtered}
        onDeleteTodo={handleDeleteTodo}
        onSwitchCompleted={onToggleComplete}
        onChangeTodoText={handleChangeTodoText}
      />
      <Tool
        todosLeft={count.active}
        todosState={todosState}
        todosFilter={todosFilter}
        onAll={() => setTodosFilter('all')}
        onActive={() => setTodosFilter('active')}
        onCompleted={() => setTodosFilter('completed')}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};
