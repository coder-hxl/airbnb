import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  name?: string
}

interface IStyledComponentProps {}
export type IStyledComponent = IDivStyledComponent<IStyledComponentProps>
export type IStyledProps = IDivStyledProps<IStyledComponentProps>
