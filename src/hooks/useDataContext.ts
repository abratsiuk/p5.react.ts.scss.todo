import { useContext } from 'react';
import { TodosDataContext } from '../components/Context';

export const useDataContext = () => {
  const context = useContext(TodosDataContext);
  if (!context) {
    throw new Error(
      'useDataContext must be used within a component that is a child of TodosProvider',
    );
  }
  return context;
};
