import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  children?: JSX.Element[]
  selectIndex: number
  center?: boolean
}

type StyledComponentProps = {
  isCenter: boolean
}

export type IStyledComponent = IDivStyledComponent<StyledComponentProps>
export type IStyledProps = IDivStyledProps<StyledComponentProps>
