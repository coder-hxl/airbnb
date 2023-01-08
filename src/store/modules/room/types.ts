export interface IState {
  roomInfo: IRoomInfo
  review: IReview
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
  lng?: number
  lat?: number
  scoreDesc?: string | null
  pictureUrls?: string[]
  bedTypes?: string[]
  landlord?: {
    id: number
    name: string
    avatarUrl: string | null
  }
}

export interface IReview {
  starRating?: number
  reviewCount?: number
  list?: {
    id: number
    comment: string
    starRating: number
    createAt: any
    user: {
      id: number
      name: string
      avatarUrl: string | null
    }
  }[]
}
