import React, { useState, useEffect } from 'react';
import { NewTodo } from '../NewTodo';
import { Todos } from '../Todos';
import { Tool } from '../Tool';
import './Main.scss';
import { TodoItem } from '../Todo/TodoItem';

export const Main = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const t1: TodoItem = { id: 't1', text: 'первый', isCompleted: false };
    const t2: TodoItem = { id: 't2', text: 'второй', isCompleted: false };
    const t3: TodoItem = { id: 't3', text: 'третий', isCompleted: false };
    const test: TodoItem[] = [t1, t2, t3];
    setTodos(test);
  }, []);

  return (
    <div className="Main">
      <NewTodo />;
      <Todos todos={todos} />;
      <Tool />;
    </div>
  );
};