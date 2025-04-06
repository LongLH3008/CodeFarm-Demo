import { axiosInstance } from '@/core/lib/instance';

export async function sendRequest<T>(
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  endpoint: string,
  data?: T,
) {
  try {
    let result;
    switch (method) {
      case 'POST':
        if (!data) return false;
        result = await axiosInstance.post(endpoint, data);
        break;
      case 'GET':
        result = await axiosInstance.get(endpoint);
        break;
      case 'PUT':
        if (!data) return false;
        result = await axiosInstance.put(endpoint, data);
        break;
      case 'DELETE':
        result = await axiosInstance.delete(endpoint);
        break;
    }
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
