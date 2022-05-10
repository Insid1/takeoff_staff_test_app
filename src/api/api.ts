import axios, {
  AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig,
} from 'axios';
import { ResponseCode } from 'enums';
import { getToken } from './token';

const BASE_URL = 'http://localhost:8000/';
const REQUEST_TIMEOUT = 5000;
// UnAuthorization function is implemented to work with real server
type UnauthorizedCallback = () => void;

const createApi = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === ResponseCode.Unauthorized) {
        return (response);
      }
      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const token = getToken();

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
  );

  return api;
};

const api = createApi(() => {
  // brow
});

export { api };
export default createApi;
