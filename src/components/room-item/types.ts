import { IList } from '@/store/modules/home/types'
import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  itemData: IList
  itemWidth: string
}

type StyledComponentProps = {
  itemWidth: string
}
export type IStyledComponent = IDivStyledComponent<StyledComponentProps>
export type IStyledProps = IDivStyledProps<StyledComponentProps>
