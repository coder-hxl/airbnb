import { IMapTypeEmptyObject } from '@/types/common'
import { IUserInfo } from '../user/types'

export interface ILoginState {
  token: string
  userInfo: IMapTypeEmptyObject<IUserInfo>
}
