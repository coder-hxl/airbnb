import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { BASE_URL, TIMEOUT } from './config'

class XLRequest {
  instance: AxiosInstance

  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({ baseURL, timeout })

    this.instance.interceptors.response.use((res) => {
      return res.data
    })
  }

  request<R = any>(config: AxiosRequestConfig): Promise<R> {
    return this.instance.request(config)
  }

  get<R = any>(config: AxiosRequestConfig): Promise<R> {
    return this.request<R>({ ...config, method: 'GET' })
  }

  post<R = any>(config: AxiosRequestConfig): Promise<R> {
    return this.request<R>({ ...config, method: 'POST' })
  }
}

export default new XLRequest(BASE_URL, TIMEOUT)
