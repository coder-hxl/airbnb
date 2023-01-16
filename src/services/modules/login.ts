import xLRequest from '..'

import { IAnyObject } from '@/types/common'

export function signUpData(data: IAnyObject) {
  return xLRequest.post<{ id: number; name: string; token: string }>({
    url: '/login',
    data
  })
}

export function signInData(data: IAnyObject) {
  return xLRequest.post<string>({
    url: '/user',
    data
  })
}
