import { IRoomDetail } from '@/store/modules/home/types'
import { IRoomDetail as IRoomDetailV2 } from '@/store/modules/entire/types'
import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  itemData: IRoomDetail | IRoomDetailV2
  itemWidth: string
}

type StyledComponentProps = {
  itemWidth: string
}
export type IStyledComponent = IDivStyledComponent<StyledComponentProps>
export type IStyledProps = IDivStyledProps<StyledComponentProps>
