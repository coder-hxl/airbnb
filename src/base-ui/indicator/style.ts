import styled from 'styled-components'

import { IStyledComponent, IStyledProps } from './types'

const IndicatorWrapper: IStyledComponent = styled.div`
  position: relative;
  overflow: hidden;

  .in-content {
    display: flex;
    justify-content: ${(props: IStyledProps) =>
      props.isCenter ? 'center' : 'left'};
    transition: transform 300ms ease;
  }
`

export default IndicatorWrapper
