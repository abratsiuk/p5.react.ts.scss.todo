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
  const textClassName = [
    styles.TodoShow__text,
    todo.isCompleted
      ? styles.TodoShow__text_completed
      : styles.TodoShow__text_active,
  ].join(' ');

  return (
    <div className={styles.TodoShow}>
      <div
        className={completedClassName}
        onClick={() => onSwitchCompleted(todo.id)}
      />
      <div className={textClassName}>{todo.text}</div>
      <button
        className={styles.TodoShow__delete}
        onClick={() => onDeleteTodo(todo.id)}
      ></button>
    </div>
  );
};
