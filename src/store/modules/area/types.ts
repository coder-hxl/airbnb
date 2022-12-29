export interface IAreaState {
  roomList: IAreaRoom[]
  totalCount: number
  currentPage: number
  isLoading: boolean
}

export type IActionTypes =
  | 'area/change_room_list'
  | 'area/change_total_count'
  | 'area/change_current_page'
  | 'area/change_is_loading'

export interface IAction {
  type: IActionTypes
  roomList?: IAreaRoom[]
  totalCount?: number
  currentPage?: number
  isLoading?: boolean
}

export interface IRoomData {
  list: IAreaRoom[]
  totalCount: number
}

export interface IAreaRoom {
  id: number
  name: string
  type: string
  price: number
  coverUrl: string
  lng: number
  lat: number
  starRating: number | null
  reviewsCount: number
  bedTypes: string[]
  scoreDesc: string | null
  pictureUrls: string[]
}
