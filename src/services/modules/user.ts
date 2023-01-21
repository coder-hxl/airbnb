import xLRequest from '..'

import { IUserInfo, IUserOptions } from '@/store/modules/user/types'
import { IMapTypeObject } from '@/types/common'

export interface IUserData {
  userInfo: IUserInfo
  options: IUserOptions
}

export type IUserUpdateData = IMapTypeObject<
  IUserInfo,
  'id' | 'name' | 'avatarUrl' | 'createAt'
>

export function getUserInfoById(userId: number | string) {
  return xLRequest.get<IUserData>({ url: `/user/${userId}` })
}

export function updateUserInfo(data: IUserUpdateData) {
  return xLRequest.request({ method: 'PATCH', url: '/user', data })
}
