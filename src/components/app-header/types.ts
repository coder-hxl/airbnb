import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

interface ISCProps {
  isFixed: boolean
}

export type IStyledComponent = IDivStyledComponent<ISCProps>
export type IStyledProps = IDivStyledProps<ISCProps>
