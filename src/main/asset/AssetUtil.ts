export const isValidKey = (key: string): boolean => {
  return /^[A-Za-z0-9-]+$/.test(key);
};

export const isValidToken = (token: string): boolean => {
  return /^[A-Za-z0-9+/=\-]+$/.test(token);
};
