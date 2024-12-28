import React from 'react';
import { TodosProps } from './TodosProps';
import { Todo } from '../Todo';
import './Todos.scss';

export const Todos: React.FC<TodosProps> = ({
  todos,
  onDeleteTodo,
  onSwitchCompleted,
  onChangeTodoText,
}) => {
  return (
    <div className="Todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onSwitchCompleted={onSwitchCompleted}
          onChangeTodoText={onChangeTodoText}
        />
      ))}
    </div>
  );
};
