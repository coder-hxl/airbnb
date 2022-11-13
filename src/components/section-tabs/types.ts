import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IProps {
  tabNames: string[]
  tabClickHandle: (tabName: string) => any
}

export type IStyledComponent = IDivStyledComponent<{}>
export type IStyledProps = IDivStyledProps<{}>
