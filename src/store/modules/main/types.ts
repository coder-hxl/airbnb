export interface IMainState {
  headerConfig: IHeaderConfig
  loginConfig: ILoginConfig
}

export interface IHeaderConfig {
  isFixed: boolean
  topAlpha: boolean
}

export interface ILoginConfig {
  showLogin: boolean
  type: 'signUp' | 'signIn'
}
