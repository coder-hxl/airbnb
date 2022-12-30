export interface IState {
  roomInfo?: IRoomInfo
}

export interface IRoomInfo {
  id?: number
  name?: string
  introduction?: string
  address?: string
  areaName?: string
  areaExtPath?: string
  price?: number
  type?: string
  coverUrl?: string
  starRating?: string | null
  lng?: number
  lat?: number
  scoreDesc?: string | null
  reviewsCount?: number
  reviews?:
    | {
        id: number
        comment: string
        starRating: number
        user: {
          id: number
          name: string
          avatarUrl?: string
        }
      }[]
    | null
  pictureUrls?: string[]
  bedTypes?: string[]
  landlord?: {
    id: number
    name: string
    avatarUrl: string | null
  }
}
