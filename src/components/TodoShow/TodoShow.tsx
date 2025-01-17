import React, { memo } from 'react';
import { ITodoItem } from '../../interfaces/ITodoItem';
import styles from './TodoShow.module.scss';
import { useActionContext } from '../../hooks/useActionContext';

export const TodoShow: React.FC<ITodoItem> = memo(
  ({ id, text, isCompleted }) => {
    const { removeTodo, toggleTodoCompleted } = useActionContext();
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
          onClick={() => toggleTodoCompleted(id)}
        />
        <div className={textClassName}>{text}</div>
        <button
          className={styles.TodoShow__remove}
          onClick={() => removeTodo(id)}
        ></button>
      </div>
    );
  },
);

TodoShow.displayName = 'TodoShow';
