import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) ?? defaultValue;

const stringifyKey = value => {
  if (Array.isArray(value)) {
    return value.join('&');
  }

  if (typeof value === 'object' && value !== null) {
    return Object.keys(value)
      .map(key => `${key}=${value[key]}`)
      .join('&');
  }

  return value;
};

export const useLocalStorage = (key, defaultValue) => {
  const stringifiedKey = stringifyKey(key);
  const [value, setValue] = useState(() =>
    getStorageValue(stringifiedKey, defaultValue)
  );

  const clearValue = () => setValue(defaultValue);

  useEffect(() => {
    if (JSON.stringify(value) === JSON.stringify(defaultValue)) {
      localStorage.removeItem(stringifiedKey);
    } else {
      localStorage.setItem(stringifiedKey, JSON.stringify(value));
    }
  }, [stringifiedKey, value, defaultValue]);

  return [value, setValue, clearValue];
};
