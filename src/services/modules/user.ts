import xLRequest from '..'

import { IUserState } from '@/store/modules/user/types'

export function getUserInfoById(userId: number | string) {
  return xLRequest.get<IUserState>({ url: `/user/${userId}` })
}
