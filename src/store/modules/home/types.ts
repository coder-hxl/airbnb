export interface IHomeState {
  goodPriceInfo: IHomeAreaV2
  highScoreInfo: IHomeAreaV2
  hotPlaceInfo: IHomeAreaV1
  wonderfulPlaceInfo: IHomeAreaV1
  longForInfo: ILongForInfo
  plusInfo: IHomeAreaV2
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

export interface IAreaRoom {
  id: number
  name: string
  extPath: string
  deep: number
  rooms: IHomeRoom[]
}

export interface IHomeAreaV1 {
  title?: string
  subtitle?: string | null
  type?: string
  list?: IAreaRoom[]
}

export interface IHomeAreaV2 {
  title?: string
  subtitle?: string | null
  type?: string
  areaRoom?: IAreaRoom
}

export interface ILongForInfo {
  title?: string
  subtitle?: string
  type?: string
  list?: {
    id: number
    city: string
    price: string
    pictureUrl: string
  }[]
}
