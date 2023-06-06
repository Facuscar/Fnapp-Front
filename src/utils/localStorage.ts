export const getFromStorage = (key: string) => {
  return localStorage.getItem(key)
};

export const setInStorage = (key: string, value: any) => {
  localStorage.setItem(key, value)
};
