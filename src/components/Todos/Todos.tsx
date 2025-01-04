import React, { memo } from 'react';
import { ITodosProps } from './ITodosProps';
import { Todo } from '../Todo';
import './Todos.scss';

export const Todos: React.FC<ITodosProps> = memo(
  ({ todos, onDeleteTodo, onToggleCompleted, onChangeTodoText }) => {
    return (
      <div className="Todos">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onDeleteTodo={onDeleteTodo}
            onToggleCompleted={onToggleCompleted}
            onChangeTodoText={onChangeTodoText}
          />
        ))}
      </div>
    );
  },
);

Todos.displayName = 'Todos';
