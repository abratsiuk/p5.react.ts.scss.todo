import React from 'react';
import { TodoShowProps } from './TodoShowProps';
import styles from './TodoShow.module.scss';

export const TodoShow: React.FC<TodoShowProps> = ({
  todo,
  onDeleteTodo,
  onSwitchCompleted,
}) => {
  const completedClassName = [
    styles.TodoShow__completed,
    todo.isCompleted
      ? styles.TodoShow__completed_completed
      : styles.TodoShow__completed_active,
  ].join(' ');

  return (
    <div className={styles.TodoShow}>
      <div
        className={completedClassName}
        onClick={() => onSwitchCompleted(todo.id)}
      >
        {todo.isCompleted ? <span>&#10003;</span> : ''}
      </div>
      <div className={styles.TodoShow__text}>{todo.text}</div>
      <button
        className={styles.TodoShow__delete}
        onClick={() => onDeleteTodo(todo.id)}
      ></button>
    </div>
  );
};
