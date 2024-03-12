
export const login = ({ accessToken, refreshToken }) => {
  try {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};

export const logout = () => {
  try {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  } catch (error) {
    console.error('Error removing tokens:', error);
  }
};

export const isLoggedIn = () => {
  try {
    return !!localStorage.getItem('accessToken');
  } catch (error) {
    console.error('Error checking tokens:', error);
    return false;
  }
};
