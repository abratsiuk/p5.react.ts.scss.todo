import React, { useState, useEffect } from 'react';
import { TodoNew } from '../TodoNew';
import { Todos } from '../Todos';
import { Tool } from '../Tool';
import './Main.scss';
import { TodoItem } from '../Todo/TodoItem';
import { TTodosState } from '../../types/TTodosState';
import { TTodosFilter } from '../../types/TTodosFilter';
import { TodosToggle } from '../TodosToggle';

export const Main = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filtered, setFiltered] = useState<TodoItem[]>([]);
  const [todosFilter, setTodosFilter] = useState<TTodosFilter>('all');
  const [todosLeft, setTodosLeft] = useState<number>(0);
  const [todosState, setTodosState] = useState<TTodosState>('empty');

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
    const t1: TodoItem = { id: 1, text: 'первый', isCompleted: false };
    const t2: TodoItem = { id: 2, text: 'второй', isCompleted: false };
    const t3: TodoItem = { id: 3, text: 'третий', isCompleted: false };
    const test: TodoItem[] = [t1, t2, t3];
    setTodos(test);
    setFiltered(test);
  }, []);

  useEffect(() => {
    const allCount = todos.length;
    const completedCount = todos.reduce((completed, todo) => {
      return completed + (todo.isCompleted ? 1 : 0);
    }, 0);
    const activeCount = allCount - completedCount;

    setTodosLeft(activeCount);
    if (allCount === 0) {
      setTodosState('empty');
    } else if (activeCount > 0 && completedCount == 0) {
      setTodosState('allActive');
    } else if (activeCount > 0 && completedCount > 0) {
      setTodosState('anyActive-anyCompleted');
    } else {
      setTodosState('allCompleted');
    }

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
        todosLeft={todosLeft}
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
