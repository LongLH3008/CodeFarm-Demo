import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const checkTokenValid = (token: string) => {
  try {
    const { exp } = jwtDecode(token);
    if (!exp) return false;
    const now = Date.now();
    const bufferTime = Number(process.env.NEXT_PUBLIC_BUFFER_TIME) || 30;
    return exp * 1000 - now > bufferTime * 1000;
  } catch (error) {
    console.error('Error decoding accessToken:', error);
    return false;
  }
};

export const decodeToken = (token: string) => {
  try {
    const decode = jwtDecode(token);
    return decode;
  } catch (error) {
    console.error('Error decoding accessToken:', error);
    return false;
  }
};

export const authToken = {
  setAccessToken: (token: string) => sessionStorage.setItem('accessToken', token),
  getAccessToken: () => sessionStorage.getItem('accessToken'),

  setRefreshToken: (token: string) => {
    Cookies.set('refreshToken', token, {
      secure: true,
      sameSite: 'Strict',
      expires: 9,
    });
  },
  getRefreshToken: () => Cookies.get('refreshToken'),

  clearTokens: () => {
    Cookies.remove('refreshToken');
    sessionStorage.removeItem('accessToken');
  },
};
