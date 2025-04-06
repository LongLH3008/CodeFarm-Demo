import axios, { InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';
import { refreshToken } from '../services/auth.service';
import { authToken, checkTokenValid } from './auth';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  if (typeof window === 'undefined') return config;

  const access = authToken.getAccessToken();
  const refresh = authToken.getRefreshToken();

  if (!access || !refresh || !checkTokenValid(refresh)) {
    return config;
  }

  if (checkTokenValid(access)) {
    config.headers['Authorization'] = `Bearer ${access}`;
    return config;
  }

  try {
    const res = await refreshToken(refresh);
    if (!res || !res.token || !res.refreshToken) throw new Error('Refresh token failed');

    authToken.setAccessToken(res.token);
    authToken.setRefreshToken(res.refreshToken);
    config.headers['Authorization'] = `Bearer ${res.token}`;
  } catch (error) {
    toast('Phiên đăng nhập đã hết hạn', {
      description: 'Vui lòng đăng nhập lại',
      action: {
        label: 'OK',
        onClick: () => {
          window.location.href = '/login';
        },
      },
    });
    console.error('Refresh token failed', error);
  }

  return config;
});
