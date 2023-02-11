import type {
  AxiosRequestConfig,
} from 'axios'

const axios = import('axios')
declare type HttpMethod = 'get' | 'put' | 'post' | 'delete'

export async function makeApiRequest<T = unknown>(
  method: HttpMethod,
  path: string,
  data?: any,
  config?: AxiosRequestConfig,
) {
  const { default: { request } } = await axios
  const res = request<T>({
    baseURL: import.meta.env.VITE_API_HOST,
    method,
    url: path,
    data,
    withCredentials: true,
    ...config,
    headers: {
      ...config?.headers,
    } as any,
  })
  return res
}

export const api = {
  get: <T = unknown>(path: string, config?: AxiosRequestConfig) => makeApiRequest<T>('get', path, undefined, config),
  delete: <T = unknown>(path: string, config?: AxiosRequestConfig) => makeApiRequest<T>('delete', path, undefined, config),
  put: <T = unknown>(path: string, data?: any, config?: AxiosRequestConfig) => makeApiRequest<T>('put', path, data, config),
  post: <T = unknown>(path: string, data?: any, config?: AxiosRequestConfig) => makeApiRequest<T>('post', path, data, config),
}
