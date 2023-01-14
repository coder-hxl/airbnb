export interface IFeedbackStore {
  isShow: boolean
  timeout: number
  type: '' | 'success' | 'error' | 'warning'
  content: string
}
