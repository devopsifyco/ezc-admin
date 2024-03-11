const TOKEN_KEY = 'userToken';

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLoggedIn = () => {
  try {
    return !!localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.log(error);
  }
 
};
