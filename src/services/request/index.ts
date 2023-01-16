import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import localCache from '@/utils/cache'

import { BASE_URL, TIMEOUT } from './config'

class XLRequest {
  instance: AxiosInstance

  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({ baseURL, timeout })

    this.instance.interceptors.request.use((config) => {
      const token = localCache.getCache('token')

      config.headers!.Authorization = `Bearer ${token}`

      return config
    })
    this.instance.interceptors.response.use(
      (res) => {
        const { data } = res.data

        return data
      },
      (error) => {
        const { response } = error
        const { message } = response.data

        throw new Error(message)
      }
    )
  }

  request<R = any>(config: AxiosRequestConfig): Promise<R> {
    return this.instance.request(config)
  }

  get<R = any>(config: AxiosRequestConfig) {
    return this.request<R>({ ...config, method: 'GET' })
  }

  post<R = any>(config: AxiosRequestConfig) {
    return this.request<R>({ ...config, method: 'POST' })
  }
}

export default new XLRequest(BASE_URL, TIMEOUT)
