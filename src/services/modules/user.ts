import xLRequest from '..'

import { IUserInfo, IUserState } from '@/store/modules/user/types'

export function getUserInfoById(userId: number | string) {
  return xLRequest.get<IUserState>({ url: `/user/${userId}` })
}

export function updateUserInfo(data: IUserInfo) {
  return xLRequest.request({ method: 'PATCH', url: '/user', data })
}
