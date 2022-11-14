import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  children?: JSX.Element[]
}

export type IStyledComponent = IDivStyledComponent<{}>
export type IStyledProps = IDivStyledProps<{}>
