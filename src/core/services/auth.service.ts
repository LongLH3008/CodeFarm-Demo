import { sendRequest } from '@/utils/sendRequest';
import { authToken } from '../lib/auth';
import { axiosInstance } from '../lib/instance';

export const login = async (data: TLogin) => {
  return await sendRequest<TLogin>('POST', '/auth/login', data);
};

export const refreshToken = async (token: string) => {
  return await sendRequest('POST', '/auth/refresh-token', { token });
};

export const logout = async (token: string) => {
  const res = await sendRequest('POST', '/logout', { token });
  if (res.statusCode === 200) {
    axiosInstance.defaults.headers.common = {};
    authToken.clearTokens();
  }
};
