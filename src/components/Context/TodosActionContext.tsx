import { createContext } from 'react';
import { ITodosActionContext } from '../../interfaces/ITodosActionContext';

export const TodosActionContext = createContext<ITodosActionContext | null>(
  null,
);
TodosActionContext.displayName = 'TodosActionContext';
