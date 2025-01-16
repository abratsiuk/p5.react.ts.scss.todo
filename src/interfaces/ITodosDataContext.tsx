import { ITodoItem } from '../interfaces/ITodoItem';
import { TTodosState } from '../types/TTodosState';
import { TTodosFilter } from '../types/TTodosFilter';
import { ITodosKindsNumber } from '../interfaces/ITodosKindsNumber';

export interface ITodosDataContext {
  todosState: TTodosState;
  filtered: ITodoItem[];
  todosKindsNumber: ITodosKindsNumber;
  todosFilter: TTodosFilter;
}
