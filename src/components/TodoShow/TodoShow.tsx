import React, { memo } from 'react';
import { ITodoShowProps } from './ITodoShowProps';
import styles from './TodoShow.module.scss';

export const TodoShow: React.FC<ITodoShowProps> = memo(
  ({ todo, onDeleteTodo, onToggleCompleted }) => {
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
          onClick={() => onToggleCompleted(todo.id)}
        />
        <div className={textClassName}>{todo.text}</div>
        <button
          className={styles.TodoShow__delete}
          onClick={() => onDeleteTodo(todo.id)}
        ></button>
      </div>
    );
  },
);
