export interface IState {
  detailInfo?: IDetailRoomInfo
}

export interface IDetailRoomInfo {
  _id?: string
  id?: string
  picture_url?: string
  picture_urls?: string[]
  verify_info?: {
    messages?: string[]
    text_color?: string
  }
  name?: string
  price?: number
  price_format?: string
  star_rating?: number
  star_rating_color?: string
  reviews_count?: number
  reviews?: {
    comments?: string
    created_at?: string
    is_translated?: boolean
    localized_date?: string
    reviewer_image_url?: string
    review_id?: number
  }[]
  bottom_info?: any
  lat?: number
  lng?: number
  image_url?: string
}
