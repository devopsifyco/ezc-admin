import { getCookie, setCookie, deleteCookie } from 'cookies-next';

export const login = ({ accessToken, refreshToken }) => {
  try {
    setCookie('accessToken', accessToken);
    setCookie('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};

export const logout = () => {
  try {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
  } catch (error) {
    console.error('Error removing tokens:', error);
  }
};

export const isLoggedIn = () => {
  try {
    
    return !!getCookie('accessToken');

  } catch (error) {
    console.error('Error checking tokens:', error);
    return false;
  }
};
