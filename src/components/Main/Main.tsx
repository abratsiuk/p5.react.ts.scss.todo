import React, { useState, useEffect } from 'react';
import { NewTodo } from '../NewTodo';
import { Todos } from '../Todos';
import { Tool } from '../Tool';
import './Main.scss';
import { TodoItem } from '../Todo/TodoItem';

type Filter = 'All' | 'Active' | 'Completed';

export const Main = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<Filter>('All');
  const [filtered, setFiltered] = useState<TodoItem[]>([]);
  const [todosLeft, setTodosLeft] = useState<number>(0);

  const onAddTodo = (text: string) => {
    console.log('onAddTodo', text);
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onDeleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const onSwitchCompleted = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  };

  const onAll = () => {
    setFilter('All');
  };
  const onActive = () => {
    setFilter('Active');
  };
  const onCompleted = () => {
    setFilter('Completed');
  };
  const onClearCompleted = () => {
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
    setTodosLeft(todos.filter((t) => !t.isCompleted).length);
    switch (filter) {
      case 'All':
        setFiltered(todos);
        break;
      case 'Active':
        setFiltered(todos.filter((t) => !t.isCompleted));
        break;
      case 'Completed':
        setFiltered(todos.filter((t) => t.isCompleted));
        break;
    }
  }, [todos, filter]);

  return (
    <div className="Main">
      <NewTodo onAddTodo={onAddTodo} />
      <Todos
        todos={filtered}
        onDeleteTodo={onDeleteTodo}
        onSwitchCompleted={onSwitchCompleted}
      />
      <Tool
        todosLeft={todosLeft}
        onAll={onAll}
        onActive={onActive}
        onCompleted={onCompleted}
        onClearCompleted={onClearCompleted}
      />
    </div>
  );
};
