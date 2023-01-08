import { IReview, IRoomInfo } from '@/store/modules/room/types'
import { IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  itemData: IRoomInfo
  review: IReview
}

export type IStyledProps = IDivStyledProps<{}>
