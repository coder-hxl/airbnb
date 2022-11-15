import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  children?: JSX.Element[]
  showShade?: boolean
}

interface StyledComponentProps {
  showShade: boolean
}
export type IStyledComponent = IDivStyledComponent<StyledComponentProps>
export type IStyledProps = IDivStyledProps<StyledComponentProps>
