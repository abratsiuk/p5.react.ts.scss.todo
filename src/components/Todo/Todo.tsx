import React from 'react';
import { TodoProps } from './TodoProps';
import './Todo.scss';

export const Todo: React.FC<TodoProps> = ({
  todo,
  onDeleteTodo,
  onSwitchCompleted,
}) => {
  const completedClassName = `Todo__completed Todo__completed${
    todo.isCompleted ? '_completed' : '_active'
  }`;
  console.log(completedClassName);
  return (
    <div className="Todo">
      <div
        className={completedClassName}
        onClick={() => onSwitchCompleted(todo.id)}
      >
        {todo.isCompleted ? <span>&#10003;</span> : ''}
      </div>
      <div className="Todo__text">{todo.text}</div>
      <button className="Todo__delete" onClick={() => onDeleteTodo(todo.id)}>
        Удалить
      </button>
    </div>
  );
};
