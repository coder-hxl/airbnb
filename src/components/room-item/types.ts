import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

interface IItemData {
  id: number
  name: string
  type: string
  price: number
  coverUrl: string
  lng?: number
  lat?: number
  starRating: number | null
  reviewsCount: number
  bedTypes: string[]
  scoreDesc: string | null
  pictureUrls?: string[]
}

export interface IProps {
  itemData: IItemData
  itemWidth: string
  itemClick?: Function
}

type StyledComponentProps = {
  itemWidth: string
}
export type IStyledComponent = IDivStyledComponent<StyledComponentProps>
export type IStyledProps = IDivStyledProps<StyledComponentProps>
