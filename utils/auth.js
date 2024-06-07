const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

export const login = (username, password) => {
  if (typeof window !== 'undefined') {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }
  return false;
};

export const register = (username, password) => {
  if (typeof window !== 'undefined') {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const userExists = users.some(user => user.username === username);
    if (userExists) {
      return false;
    }
    users.push({ username, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return true;
  }
  return false;
};

export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    return !!user;
  }
  return false;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};