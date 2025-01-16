import { useContext } from 'react';
import { TodosActionContext } from '../components/Context';

export const useActionContext = () => {
  const context = useContext(TodosActionContext);
  if (!context) {
    throw new Error(
      'useActionContext must be used within a component that is a child of TodosProvider',
    );
  }
  return context;
};
