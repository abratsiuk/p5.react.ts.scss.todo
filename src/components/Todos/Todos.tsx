import React from 'react';
import { ITodosProps } from './ITodosProps';
import { Todo } from '../Todo';
import './Todos.scss';

export const Todos: React.FC<ITodosProps> = ({
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
