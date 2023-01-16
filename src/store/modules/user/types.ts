export interface IUserState {
  userInfo: IUserInfo
  options: IUserOptions
}

export interface IUserInfo {
  id?: number
  name?: string
  nikename?: string | null
  cellphone?: number
  introduce?: string | null
  avatarUrl?: string | null
  createAt?: string
}

export interface IUserOptions {
  isOwner?: boolean
}
