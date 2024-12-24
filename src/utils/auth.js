export const login = (username, password) => {
  // In a real app, this would be an API call
  if (username === 'admin' && password === 'admin123') {
    localStorage.setItem('isAdmin', 'true');
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('isAdmin');
};

export const isAdmin = () => {
  return localStorage.getItem('isAdmin') === 'true';
};