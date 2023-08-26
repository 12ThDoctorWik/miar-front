import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const value = localStorage.getItem(key);
    try {
      return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
      return value;
    }
  });

  const setLocalStorageStateValue = valueOrFn => {
    let newValue;
    if (typeof valueOrFn === 'function') {
      const fn = valueOrFn;
      newValue = fn(localStorageValue);
    } else {
      newValue = valueOrFn;
    }
    localStorage.setItem(
      key,
      typeof newValue === 'string' ? newValue : JSON.stringify(newValue)
    );
    setLocalStorageValue(newValue);
  };
  return [localStorageValue, setLocalStorageStateValue];
};
