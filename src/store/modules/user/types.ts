import { IMapTypeEmptyObject } from '@/types/common'

export interface IUserState {
  userInfo: IMapTypeEmptyObject<IUserInfo>
  options: IMapTypeEmptyObject<IUserOptions>
}



export interface IUserInfo {
  id: number
  name: string
  cellphone: number
  introduce: string | null
  avatarUrl: string | null
  createAt: string
}

export interface IUserOptions {
  isOwner: boolean
}
