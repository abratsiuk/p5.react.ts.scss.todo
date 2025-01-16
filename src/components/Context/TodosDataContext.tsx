import { createContext } from 'react';
import { ITodosDataContext } from '../../interfaces/ITodosDataContext';

export const TodosDataContext = createContext<ITodosDataContext | null>(null);
