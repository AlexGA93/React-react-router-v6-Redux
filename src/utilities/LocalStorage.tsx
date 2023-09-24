export const userKey = "user";

export const checkLocalStorage = (key: string): string | null =>
  localStorage.getItem(key);

export const persistLocalStorage = <T,>(key: string, value: T): void => {
  // generic type
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
