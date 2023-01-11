export interface IUserState {
  token: string | undefined
  userInfo: IUserInfo
}

export interface IUserInfo {
  id?: number
  nikename?: string | null
  cellphone?: number
  introduce?: string | null
  avatarUrl?: string | null
  createAt?: string
}
