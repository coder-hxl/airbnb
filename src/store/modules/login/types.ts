import { IUserInfo } from '../user/types'

export interface ILoginState {
  token: string | undefined
  userInfo: IUserInfo
}
