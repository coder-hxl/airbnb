import { IDivStyledProps } from '@/types/styled-component'
import { IHeaderTheme } from '@/components/app-header/types'

export interface ISearchTabsProps {
  tabs: string[]
  tabIndex: number
  tabClick: (currentIndex: number) => void
}

export type IStyldProps = IDivStyledProps<{}, IHeaderTheme>
