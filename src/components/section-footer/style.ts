import styled from 'styled-components'

import { IStyledComponent, IStyledProps } from './types'

const SectionFooterWrapper: IStyledComponent = styled.div`
  display: flex;
  font-size: 17px;
  font-weight: 600;
  color: ${(props: IStyledProps) => props.color};

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
    .name {
      margin-right: 5px;
    }
  }
`

export default SectionFooterWrapper
