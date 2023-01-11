import xLRequest from '..'

import { IAnyObject } from '@/types/common'
import { IUserInfo } from '@/store/modules/user/types'

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

export function getUserInfoById(userId: number) {
  return xLRequest.get<IUserInfo>({ url: `/user/${userId}` })
}
