export interface IHomeState {
  goodPriceInfo: IGoodPriceInfo
  highScoreInfo: IHighScoreInfo
  discountInfo: IDiscountInfo
  hotRecommendDestInfo: IHotRecommendDestInfo
  longForInfo: ILongForInfo
  plusInfo: IPlusInfo
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

export interface IDiscountInfo {
  _id?: string
  type?: string
  title?: string
  subtitle?: string
  dest_address?: {
    name: string
    homes: string[]
  }[]
  dest_list?: {
    [key: string]: IHomeRoomDetail[]
  }
}

export interface IHotRecommendDestInfo {
  _id?: string
  type?: string
  title?: string
  dest_address?: {
    name: string
    homes: string[]
  }[]
  dest_list?: {
    [key: string]: IHomeRoomDetail[]
  }
}

export interface ILongForInfo {
  _id?: string
  title?: string
  subtitle?: string
  type?: string
  list?: {
    city: string
    price: string
    picture_url: string
    image_url: string
  }[]
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
