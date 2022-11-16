// import { IRoomDetail } from '@/store/modules/home/types'
// import { IRoomDetail as IRoomDetailV2 } from '@/store/modules/entire/types'
import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  itemData: IItemData
  itemWidth: string
}

interface IItemData {
  _id?: string
  id: string
  picture_url: string
  picture_urls?: string[]
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
  } | null
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
    review_id: string | number
  }[]
}

type StyledComponentProps = {
  itemWidth: string
}
export type IStyledComponent = IDivStyledComponent<StyledComponentProps>
export type IStyledProps = IDivStyledProps<StyledComponentProps>
