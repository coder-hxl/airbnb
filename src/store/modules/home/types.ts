export interface IHomeState {
  goodPrice: IGoodPrice
}

export interface IHomeReducers {}

export interface IGoodPrice {
  _id?: string
  type?: string
  title?: string
  list?: IGoodPriceListItem[]
}

export interface IGoodPriceListItem {
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
