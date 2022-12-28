import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  tabNames: string[]
  tabClickHandle: (index: number) => any
}

export type IStyledComponent = IDivStyledComponent<{}>
export type IStyledProps = IDivStyledProps<{}>
