export interface IHomeState {
  goodPriceInfo: IGoodPriceInfo
  highScoreInfo: IHighScoreInfo
  hotPlaceInfo: IHomeArea
  wonderfulPlaceInfo: IHomeArea
  longForInfo: ILongForInfo
  plusInfo: IPlusInfo
}

export interface IHomeRoom {
  id: number
  name: string
  type: string
  price: number
  coverUrl: string
  starRating: number | null
  reviewsCount: number
  bedTypes: string[]
  scoreDesc: string | null
}

export interface IHomeArea {
  title?: string
  subtitle?: string | null
  list?: {
    id: number
    name: string
    extPath: string
    deep: number
    rooms: IHomeRoom[]
  }[]
}

export interface ILongForInfo {
  title?: string
  subtitle?: string
  list?: {
    id: number
    city: string
    price: string
    pictureUrl: string
  }[]
}

export interface IGoodPriceInfo {
  _id?: string
  type?: string
  title?: string
  list?: IHomeRoomDetail[]
}

export interface IHighScoreInfo {
  _id?: string
  type?: string
  title?: string
  subtitle?: string
  list?: IHomeRoomDetail[]
}

export interface IPlusInfo {
  _id?: string
  type?: string
  title?: string
  subtitle?: string
  list?: IHomeRoomDetail[]
}

export interface IHomeRoomDetail {
  id: string
  picture_url: string
  verify_info: {
    messages: string[]
    text_color: string
  }
  name: string
  price: number
  price_format: string
  star_rating_color: string
  reviews_count: number
  bottom_info?: {
    content: string
    content_color: string
    font_size: string
    visibility: string
  }
  lat: number
  lng: number
  image_url: string
  star_rating?: number
  reviews?: {
    comments: string
    created_at: string
    is_translated: boolean
    localized_date: string
    reviewer_image_url: string
    review_id: string
  }[]
}
