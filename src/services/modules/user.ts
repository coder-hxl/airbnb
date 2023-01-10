import xLRequest from '..'

import { IAnyObject } from '@/types/common'
import { IUserState } from '@/store/modules/user/types'

export function signUpData(data: IAnyObject) {
  return xLRequest.post<IUserState>({
    url: '/login',
    data
  })
}

export function signInData(data: IAnyObject) {
  return xLRequest.post<IUserState>({
    url: '/user',
    data
  })
}
