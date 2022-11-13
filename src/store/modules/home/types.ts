export interface IHomeState {
  goodPriceInfo: IGoodPriceInfo
  highScoreInfo: IHighScoreInfo
  discountInfo: IDiscountInfo
  hotRecommendDestInfo: IHotRecommendDestInfo
}

export interface IGoodPriceInfo {
  _id?: string
  type?: string
  title?: string
  list?: IList[]
}

export interface IHighScoreInfo {
  _id?: string
  type?: string
  title?: string
  subtitle?: string
  list?: IList[]
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
    [key: string]: IList[]
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
    [key: string]: IList[]
  }
}

export interface IList {
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
