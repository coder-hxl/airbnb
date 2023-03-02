import { IReview, IRoomInfo } from '@/store/modules/room/types'
import { IMapTypeEmptyObject } from '@/types/common'
import { IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  itemData: IMapTypeEmptyObject<IRoomInfo>
  review: IMapTypeEmptyObject<IReview>
}

export type IStyledProps = IDivStyledProps<{}>
