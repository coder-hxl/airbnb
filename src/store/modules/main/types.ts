export interface IMainState {
  headerConfig: IHeaderConfig
  footerConfig: IFooterConfig
  loginConfig: ILoginConfig
}

export interface IHeaderConfig {
  isFixed: boolean
  topAlpha: boolean
}

export interface IFooterConfig {
  showFooter: boolean
}

export interface ILoginConfig {
  showLogin: boolean
  type: 'signUp' | 'signIn'
}
