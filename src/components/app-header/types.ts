import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IHeaderTheme {
  isAlpha: boolean
}

interface ISCProps {}

export type IStyledComponent = IDivStyledComponent<ISCProps>
export type IStyledProps = IDivStyledProps<ISCProps, IHeaderTheme>

interface IHPCStyledProps {
  isSearch: boolean
}

export type IHeaderPlaceholderCpn = IDivStyledComponent<IHPCStyledProps>
export type IHeaderPlaceholderStyledProps = IDivStyledProps<
  IHPCStyledProps,
  IHeaderTheme
>
