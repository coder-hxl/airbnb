export interface IEntireState {
  roomList: IEntireRoomDetail[]
  totalCount: number
  currentPage: number
  isLoading: boolean
}

export type IActionTypes =
  | 'entire/change_room_list'
  | 'entire/change_total_count'
  | 'entire/change_current_page'
  | 'entire/change_is_loading'

export interface IAction {
  type: IActionTypes
  roomList?: IEntireRoomDetail[]
  totalCount?: number
  currentPage?: number
  isLoading?: boolean
}

export interface IRoomData {
  list: IEntireRoomDetail[]
  errcode: number
  totalCount: number
}

export interface IEntireRoomDetail {
  _id: string
  id: string
  picture_url: string
  picture_urls: string[]
  verify_info: {
    messages: string[]
    text_color: string
  }
  name: string
  price: number
  price_format: string
  star_rating?: number
  star_rating_color: string
  reviews_count: number
  reviews?: {
    comments: string
    created_at: string
    is_translated: boolean
    localized_date: string
    reviewer_image_url: string
    review_id: number
  }[]
  bottom_info: any
  lat: number
  lng: number
  image_url: string
}
