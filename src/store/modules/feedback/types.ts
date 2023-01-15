export interface IFeedbackStore {
  isShow: boolean
  timeout: number
  queue: {
    id: number
    type: '' | 'success' | 'error' | 'warning'
    content: string
  }[]
}
