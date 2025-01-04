import React, { memo } from 'react';
import { ITodoShowProps } from './ITodoShowProps';
import styles from './TodoShow.module.scss';

export const TodoShow: React.FC<ITodoShowProps> = memo(
  ({ id, text, isCompleted, onDeleteTodo, onToggleCompleted }) => {
    const completedClassName = [
      styles.TodoShow__completed,
      isCompleted
        ? styles.TodoShow__completed_completed
        : styles.TodoShow__completed_active,
    ].join(' ');
    const textClassName = [
      styles.TodoShow__text,
      isCompleted
        ? styles.TodoShow__text_completed
        : styles.TodoShow__text_active,
    ].join(' ');

    return (
      <div className={styles.TodoShow}>
        <div
          className={completedClassName}
          onClick={() => onToggleCompleted(id)}
        />
        <div className={textClassName}>{text}</div>
        <button
          className={styles.TodoShow__delete}
          onClick={() => onDeleteTodo(id)}
        ></button>
      </div>
    );
  },
);

TodoShow.displayName = 'TodoShow';
