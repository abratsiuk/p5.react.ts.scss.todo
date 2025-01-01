import { useSyncExternalStore } from 'react';

// https://www.youtube.com/watch?v=Y34aQue4DIg&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9
// Михаил Некпомнящий "useSyncExternalStore и примеры практического использования"
export const useLocalStorageSync = (key, initialValue) => {
  const getSnapshot = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const subscribe = (callback) => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  };

  const value = useSyncExternalStore(subscribe, getSnapshot);

  const setValue = (newValue: string) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setValue];
};
