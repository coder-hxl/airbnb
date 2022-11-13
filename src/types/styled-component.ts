import { StyledComponent, ThemedStyledProps } from 'styled-components'

import { ThemeType } from '@/assets/theme'

export type IDivStyledComponent<P extends Object> = StyledComponent<
  'div',
  any,
  P
>

export type IDivStyledProps<P> = ThemedStyledProps<
  P &
    Pick<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      'key' | keyof React.HTMLAttributes<HTMLDivElement>
    >,
  ThemeType
>
